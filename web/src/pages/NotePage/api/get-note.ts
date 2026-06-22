import { notesController } from '../../../api/notes-controller';

export const getNote = async (noteId: string) => {
  const res = await notesController.notesControllerGetOne({}, { id: noteId });
  return res.data;
};
