import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { language, theme } from '../../../../prisma/generated/client';

export class UpdateMeDto {
  @IsOptional()
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters' })
  @MaxLength(30, { message: 'Username cannot be longer than 30 characters' })
  readonly username?: string;

  @IsOptional()
  @IsEnum(theme, { message: 'Invalid theme' })
  readonly theme?: theme;

  @IsOptional()
  @IsEnum(language, { message: 'Invalid language' })
  readonly language?: language;
}
