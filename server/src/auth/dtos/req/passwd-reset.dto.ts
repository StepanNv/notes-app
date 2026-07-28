import { IsEmail, IsNotEmpty } from 'class-validator';

export class PasswdResetDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
