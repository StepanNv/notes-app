import { Controller, HttpStatus, HttpCode, Post, Body } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { ConfirmationDto } from './dtos/confirmation.dto';

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public async newVerification(@Body() dto: ConfirmationDto) {
    return this.emailConfirmationService.newVerification(dto);
  }
}
