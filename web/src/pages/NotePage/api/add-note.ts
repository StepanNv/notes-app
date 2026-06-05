import type { AddNoteDto } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const addNote = async (data: AddNoteDto) => {
  const res = await notesController.notesControllerAddNote(data);
  return res.data;
};
