import { NoteDto } from '../note.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetNoteResDto {
  readonly note: NoteDto;
}
