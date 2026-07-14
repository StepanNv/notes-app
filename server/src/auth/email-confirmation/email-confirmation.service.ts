import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfirmationCodeType } from '../../../prisma/generated/enums';
import { ConfirmEmailVerificationDto } from './dtos/confirm-email-verification.dto';
import { User } from '../../../prisma/generated/client';
import { MailService } from '../../libs/mail/mail.service';
import { UsersService } from '../../users/users.service';
import { TokensService } from '../tokens/tokens.service';
import { ConfirmPasswdResetDto } from './dtos/confirm-passwd-reset.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class EmailConfirmationService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly usersService: UsersService,
    private readonly tokensService: TokensService,
  ) {}

  public async newVerification(dto: ConfirmEmailVerificationDto) {
    const existingConfirmationCode = await this.checkConfirmationCode(
      dto.email,
      dto.confirmationCode,
      ConfirmationCodeType.VERIFICATION,
    );

    const existingUser = await this.usersService.getOne({
      email: dto.email,
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
        id: existingConfirmationCode.id,
        type: ConfirmationCodeType.VERIFICATION,
      },
    });

    return this.tokensService.generateTokens({
      userId: existingUser.id,
    });
  }

  public async newPasswordReset(dto: ConfirmPasswdResetDto) {
    const existingConfirmationCode = await this.checkConfirmationCode(
      dto.email,
      dto.confirmationCode,
      ConfirmationCodeType.PASSWORD_RESET,
    );

    const existingUser = await this.usersService.getOne({
      email: dto.email,
    });

    await this.prismaService.confirmationCode.delete({
      where: {
        id: existingConfirmationCode.id,
        type: ConfirmationCodeType.PASSWORD_RESET,
      },
    });

    await this.usersService.updateOne(existingUser.id, {
      hashedPassword: await bcrypt.hash(dto.newPassword, 5),
    });

    return true;
  }

  public async sendConfirmationCode(
    user: User,
    confirmationCodeType: ConfirmationCodeType,
  ) {
    const confirmationCode = await this.generateConfirmationCode(
      user.email,
      confirmationCodeType,
    );

    await this.mailService.sendConfirmationEmail(
      user.email,
      confirmationCode.confirmationCode,
      confirmationCodeType,
    );

    return true;
  }

  private async generateConfirmationCode(
    email: string,
    confirmationCodeType: ConfirmationCodeType,
  ) {
    const confirmationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

    const existingCode = await this.prismaService.confirmationCode.findFirst({
      where: {
        email,
        type: confirmationCodeType,
      },
    });

    if (existingCode) {
      await this.prismaService.confirmationCode.delete({
        where: {
          id: existingCode.id,
          type: confirmationCodeType,
        },
      });
    }

    return await this.prismaService.confirmationCode.create({
      data: {
        email,
        confirmationCode,
        expiresIn,
        type: confirmationCodeType,
      },
    });
  }

  private async checkConfirmationCode(
    email: string,
    confirmationCode: string,
    confirmationCodeType: ConfirmationCodeType,
  ) {
    const existingCode = await this.prismaService.confirmationCode.findFirst({
      where: {
        email: email,
        type: confirmationCodeType,
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

    if (existingCode.confirmationCode !== confirmationCode) {
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

    return existingCode;
  }
}
