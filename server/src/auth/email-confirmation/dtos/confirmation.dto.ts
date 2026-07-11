import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ConfirmationDto {
  @IsEmail()
  @IsNotEmpty()
  confirmationEmail: string;

  @IsString()
  @IsNotEmpty()
  confirmationCode: string;
}
