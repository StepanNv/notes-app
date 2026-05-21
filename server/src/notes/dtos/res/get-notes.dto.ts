import { ApiProperty } from '@nestjs/swagger';
import { colorKey, status } from '../../../../prisma/generated/enums';

export class NoteDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty({ nullable: true })
  readonly title: string | null;

  @ApiProperty({ nullable: true })
  readonly text: string | null;

  @ApiProperty({ enum: colorKey })
  readonly colorKey: colorKey;

  @ApiProperty({ enum: status })
  readonly status: status;

  @ApiProperty()
  readonly positionNumber: number;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  @ApiProperty()
  readonly authorId: string;
}

export class GetNotesMetaDto {
  @ApiProperty({ nullable: true })
  readonly next_last_id: string | null;
}

export class GetNotesResponseDto {
  @ApiProperty({ type: [NoteDto] })
  readonly data: NoteDto[];

  @ApiProperty({ type: GetNotesMetaDto })
  readonly meta: GetNotesMetaDto;
}
