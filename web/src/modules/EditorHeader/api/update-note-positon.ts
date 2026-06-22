import { notesController } from '../../../api/notes-controller';

export const updateNotePosition = (id: string, updatedPositionNumber: number) =>
  notesController.notesControllerUpdatePosition({
    noteId: id,
    updatedPositionNumber,
  });
