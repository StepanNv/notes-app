import type { NotesControllerGetManyParams } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const getNotes = (query: NotesControllerGetManyParams) =>
  notesController.notesControllerGetMany({}, query);
