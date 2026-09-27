import {
  Controller,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  Res,
} from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { ConfirmEmailVerificationDto } from './dtos/confirm-email-verification.dto';
import { ConfirmPasswdResetDto } from './dtos/confirm-passwd-reset.dto';
import { AuthController } from '../auth.controller';
import type { Response } from 'express';
import { TokensService } from '../tokens/tokens.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
    private readonly tokensService: TokensService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/verification')
  @HttpCode(HttpStatus.OK)
  public async newVerification(
    @Body() dto: ConfirmEmailVerificationDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userData = await this.emailConfirmationService.newVerification(dto);
    const tokens = await this.tokensService.generateTokens({
      userId: userData.id,
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      // secure: true,
      maxAge: this.configService.get<number>('REFRESH_TOKEN_EXPIRES')! * 1000,
    });

    return { accessToken: tokens.accessToken };
  }

  @Post('/password-reset')
  @HttpCode(HttpStatus.OK)
  public newPasswordReset(@Body() dto: ConfirmPasswdResetDto) {
    return this.emailConfirmationService.newPasswordReset(dto);
  }
}
