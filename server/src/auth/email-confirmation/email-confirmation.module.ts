import { Module } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { EmailConfirmationController } from './email-confirmation.controller';
import { MailModule } from '../../libs/mail/mail.module';
import { TokensModule } from '../tokens/tokens.module';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [MailModule, TokensModule, UsersModule],
  controllers: [EmailConfirmationController],
  providers: [EmailConfirmationService],
  exports: [EmailConfirmationService],
})
export class EmailConfirmationModule {}
