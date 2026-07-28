import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dtos/req/sign-up.dto';
import { SignInDto } from './dtos/req/sign-in.dto';
import { TTokensPayload } from './types/jwt-payload';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { PasswdResetDto } from './dtos/req/passwd-reset.dto';
import { ConfirmationCodeType } from '../../prisma/generated/enums';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  public async signUp(dto: SignUpDto) {
    const isUserExists = await this.usersService.findOne({
      email: dto.email,
      username: dto.username,
    });

    if (isUserExists) {
      throw new HttpException(
        'User with this email or username already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);

    const newUser = await this.usersService.createOne(
      dto.email,
      dto.username,
      hashPassword,
    );

    await this.emailConfirmationService.sendConfirmationCode(
      newUser,
      ConfirmationCodeType.VERIFICATION,
    );

    return {
      message:
        'Your account has been created successfully. Please confirm your email address. Message will be sent to your email address.',
    };
  }

  public async signIn(dto: SignInDto) {
    const user = await this.usersService.getOne({ email: dto.email });

    const passwordEquals = await bcrypt.compare(
      dto.password,
      user.hashedPassword,
    );

    if (!passwordEquals) {
      throw new BadRequestException({ message: 'Invalide password' });
    }

    if (!user.isVerified) {
      await this.emailConfirmationService.sendConfirmationCode(
        user,
        ConfirmationCodeType.VERIFICATION,
      );
      throw new ForbiddenException({
        code: 'EMAIL_NOT_VERIFIED',
        message: 'Please confirm your email address',
      });
    }

    return user;
  }

  public async refresh(refreshTokenPayload: TTokensPayload) {
    const user = await this.usersService.getOne({
      id: refreshTokenPayload.userId,
    });

    if (!user) {
      throw new ForbiddenException(
        'This account no longer exists. Please log in with a different account.',
      );
    }

    return user;
  }

  public async passwordReset(dto: PasswdResetDto) {
    const user = await this.usersService.getOne({ email: dto.email });

    if (!user) {
      throw new BadRequestException({
        message: 'User with this email is not exists',
      });
    }

    await this.emailConfirmationService.sendConfirmationCode(
      user,
      ConfirmationCodeType.PASSWORD_RESET,
    );

    return {
      message:
        'A confirmation code has been sent to your email address. Please enter the code to reset your password.',
    };
  }
}
