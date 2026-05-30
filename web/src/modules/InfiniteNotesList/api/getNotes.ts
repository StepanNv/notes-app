import type { NotesControllerGetNotesParams } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const getNotes = async (query: NotesControllerGetNotesParams) =>
  await notesController.notesControllerGetNotes({}, query);
