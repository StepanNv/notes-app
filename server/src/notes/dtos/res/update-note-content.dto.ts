import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteContentResponseDto {
  @ApiProperty()
  readonly updatedAt: Date;
}
