import { ApiProperty } from '@nestjs/swagger';
import type { User } from '../../../../prisma/generated/client';

export class GetMeResDto implements Pick<
  User,
  'email' | 'username' | 'createdAt'
> {
  readonly email: string;

  readonly username: string;

  readonly createdAt: Date;
}
