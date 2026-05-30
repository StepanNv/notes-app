import type { NotesControllerGetNotesParams } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const getNotes = async (params: NotesControllerGetNotesParams) =>
  await notesController.notesControllerGetNotes({}, params);
