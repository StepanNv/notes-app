import { notesController } from '../../../api/notes-controller';

export const getNote = async (noteId: string) => {
  const res = await notesController.notesControllerGetNote({}, { id: noteId });
  return res.data;
};
