import { NoteDto } from "../note.dto";

export class GetNotesResDto {
  readonly notes: NoteDto[];
  readonly next_last_id: string | null;
}
