import { ApiProperty } from '@nestjs/swagger';

export class AddNoteResponseDto {
  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;
}
