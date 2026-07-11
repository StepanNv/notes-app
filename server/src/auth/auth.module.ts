import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { TokensModule } from './tokens/tokens.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    TokensModule,
    EmailConfirmationModule,
  ],
  exports: [TokensModule],
})
export class AuthModule {}
