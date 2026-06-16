import type { NotesControllerGetNotesParams } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const getNotes = (query: NotesControllerGetNotesParams) =>
  notesController.notesControllerGetNotes({}, query);
