import { notesController } from '../../../api/notes-controller';

export const deleteNotes = (noteIds: string[]) =>
  notesController.notesControllerDeleteNotes({ noteIds });
