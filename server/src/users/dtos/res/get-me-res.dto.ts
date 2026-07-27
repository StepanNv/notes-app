import { ApiProperty } from '@nestjs/swagger';
import { language, theme, User } from '../../../../prisma/generated/client';

export class GetMeResDto implements Pick<
  User,
  'email' | 'username' | 'language' | 'theme' | 'createdAt'
> {
  readonly email: string;

  readonly username: string;

  @ApiProperty({ enum: theme })
  readonly theme: theme;

  @ApiProperty({ enum: language })
  readonly language: language;

  readonly createdAt: Date;
}
