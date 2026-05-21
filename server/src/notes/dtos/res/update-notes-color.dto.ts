import { ApiProperty } from '@nestjs/swagger';

export class UpdatedNoteColorDto {
  @ApiProperty()
  readonly noteId: string;

  @ApiProperty()
  readonly updatedAt: Date;
}

export class UpdateNotesColorResponseDto {
  @ApiProperty({ type: [UpdatedNoteColorDto] })
  readonly updatedNotesData: UpdatedNoteColorDto[];
}
