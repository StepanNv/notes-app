import { Controller, HttpStatus, HttpCode, Post, Body } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { ConfirmEmailVerificationDto } from './dtos/confirm-email-verification.dto';
import { ConfirmPasswdResetDto } from './dtos/confirm-passwd-reset.dto';

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post('/verification')
  @HttpCode(HttpStatus.OK)
  public newVerification(@Body() dto: ConfirmEmailVerificationDto) {
    return this.emailConfirmationService.newVerification(dto);
  }

  @Post('/password-reset')
  @HttpCode(HttpStatus.OK)
  public newPasswordReset(@Body() dto: ConfirmPasswdResetDto) {
    return this.emailConfirmationService.newPasswordReset(dto);
  }
}
