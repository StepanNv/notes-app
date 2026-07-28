import type { AddNoteDto } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const addNote = async (data: AddNoteDto) => {
  const res = await notesController.notesControllerAdd(data);
  return res.data;
};
