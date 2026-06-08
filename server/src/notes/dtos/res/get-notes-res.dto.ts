import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../../../../prisma/generated/client';
import { colorKey, status } from '../../../../prisma/generated/enums';

export class NoteDto implements Pick<
  Note,
  | 'id'
  | 'title'
  | 'text'
  | 'colorKey'
  | 'status'
  | 'positionNumber'
  | 'createdAt'
  | 'updatedAt'
  | 'authorId'
> {
  readonly id: string;
  readonly title: string | null;
  readonly text: string | null;
  @ApiProperty({ enum: colorKey })
  readonly colorKey: colorKey;
  @ApiProperty({ enum: status })
  readonly status: status;
  readonly positionNumber: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly authorId: string;
}

export class GetNotesResDto {
  readonly notes: NoteDto[];
  readonly next_last_id: string | null;
}
