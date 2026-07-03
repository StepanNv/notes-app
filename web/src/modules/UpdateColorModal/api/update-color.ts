import { notesController } from '../../../api/notes-controller';
import type { UpdateNotesColorDto } from '../../../api/generated/data-contracts';

export const updateColor = (
  ids: string[],
  color: UpdateNotesColorDto['updatedColorKey'],
) =>
  notesController.notesControllerUpdateColor({
    noteIds: ids,
    updatedColorKey: color,
  });
