import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ConfirmEmailVerificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  confirmationCode: string;
}
