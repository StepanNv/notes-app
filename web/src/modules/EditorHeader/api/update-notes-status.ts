import type { UpdateStatusDto } from '../../../api/generated/data-contracts';
import { notesController } from '../../../api/notes-controller';

export const updateNoteStatus = (data: UpdateStatusDto) =>
  notesController.notesControllerUpdateStatus(data);
