import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfirmationCodeType } from '../../../prisma/generated/enums';
import { ConfirmationDto } from './dtos/confirmation.dto';
import { User } from '../../../prisma/generated/client';
import { MailService } from '../../libs/mail/mail.service';
import { UsersService } from '../../users/users.service';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class EmailConfirmationService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly usersService: UsersService,
    private readonly tokensService: TokensService,
  ) {}

  public async newVerification(dto: ConfirmationDto) {
    const existingCode = await this.prismaService.confirmationCode.findFirst({
      where: {
        email: dto.confirmationEmail,
        type: ConfirmationCodeType.VERIFICATION,
      },
    });

    if (!existingCode) {
      throw new NotFoundException(
        'Code not found. Please make sure you have the correct code.',
      );
    }

    const hasExpired = new Date(existingCode.expiresIn) < new Date();

    if (hasExpired) {
      throw new BadRequestException(
        'Code has expired. Please request a new code for verification.',
      );
    }

    if (existingCode.attempts >= 5) {
      throw new BadRequestException(
        'You have reached the maximum number of attempts. Please request a new code for verification.',
      );
    }

    if (existingCode.confirmationCode !== dto.confirmationCode) {
      await this.prismaService.confirmationCode.update({
        where: {
          id: existingCode.id,
        },
        data: {
          attempts: existingCode.attempts + 1,
        },
      });
      throw new BadRequestException('Invalid code. Please try again.');
    }

    const existingUser = await this.usersService.getOne({
      email: existingCode.email,
    });

    if (!existingUser) {
      throw new NotFoundException(
        'User with this email not found. Please make sure you have the correct email.',
      );
    }

    await this.prismaService.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        isVerified: true,
      },
    });

    await this.prismaService.confirmationCode.delete({
      where: {
        id: existingCode.id,
        type: ConfirmationCodeType.VERIFICATION,
      },
    });

    return this.tokensService.generateTokens({
      userId: existingUser.id,
    });
  }

  public async sendVerificationCode(user: User) {
    const verificationCode = await this.generateVerificationCode(user.email);
    await this.mailService.sendConfirmationEmail(
      user.email,
      verificationCode.confirmationCode,
    );
    return true;
  }

  private async generateVerificationCode(email: string) {
    const confirmationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

    const existingCode = await this.prismaService.confirmationCode.findFirst({
      where: {
        email,
        type: ConfirmationCodeType.VERIFICATION,
      },
    });

    if (existingCode) {
      await this.prismaService.confirmationCode.delete({
        where: {
          id: existingCode.id,
          type: ConfirmationCodeType.VERIFICATION,
        },
      });
    }

    const verificationCode = await this.prismaService.confirmationCode.create({
      data: {
        email,
        confirmationCode,
        expiresIn,
        type: ConfirmationCodeType.VERIFICATION,
      },
    });

    return verificationCode;
  }
}
