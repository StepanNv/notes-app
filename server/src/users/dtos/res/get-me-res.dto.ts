import { ApiProperty } from '@nestjs/swagger';
import type { User } from '../../../../prisma/generated/client';

export class GetMeResDto implements User {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly hashedPassword: string;
}
