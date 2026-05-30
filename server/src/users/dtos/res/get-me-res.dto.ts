import { ApiProperty } from '@nestjs/swagger';
import type { User } from '../../../../prisma/generated/client';

export class GetMeResDto implements Pick<
  User,
  'email' | 'username' | 'createdAt'
> {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly createdAt: Date;
}
