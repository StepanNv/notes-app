import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ConfirmPasswdResetDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  confirmationCode: string;
}
