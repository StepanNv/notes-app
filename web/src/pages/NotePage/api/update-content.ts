import type { UpdateNoteContentDto } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const updateContent = async (data: UpdateNoteContentDto) => {
  const res = await notesController.notesControllerUpdateNoteContent(data);
  return res.data;
};
