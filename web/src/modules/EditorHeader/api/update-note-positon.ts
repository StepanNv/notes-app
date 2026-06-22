import { notesController } from '../../../api/notes-controller';

export const updateNotePosition = (id: string, updatedPositionNumber: number) =>
  notesController.notesControllerUpdateNotePosition({
    noteId: id,
    updatedPositionNumber,
  });
