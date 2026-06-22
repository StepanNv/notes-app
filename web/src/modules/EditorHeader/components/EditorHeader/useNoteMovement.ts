import { skipToken, useQuery, type InfiniteData } from '@tanstack/react-query';
import type { GetNotesResDto } from '../../../../api/generated/data-contracts';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { useUpdateNotePosition } from './useUpdateNotePosition';

// Считает доступность кнопок Up/Down для выделенной заметки и даёт хендлеры перемещения
export const useNoteMovement = () => {
  const selectedIds = useNotesSelectionStore((state) => state.selectedIds);
  const { move } = useUpdateNotePosition();

  const { data } = useQuery<InfiniteData<GetNotesResDto>>({
    queryKey: ['notes'],
    queryFn: skipToken,
  });

  const notes = data?.pages.flatMap((page) => page.notes) ?? [];

  const isSingleSelected = selectedIds.size === 1;
  const selectedId = isSingleSelected ? [...selectedIds][0] : null;
  const index = selectedId
    ? notes.findIndex((note) => note.id === selectedId)
    : -1;

  const canMoveUp = isSingleSelected && index > 0;
  const canMoveDown =
    isSingleSelected && index !== -1 && index < notes.length - 1;

  // Двигает выделенную заметку на одну позицию вверх
  const moveUp = () => {
    if (!canMoveUp) return;
    move(notes[index].id, 'up');
  };

  // Двигает выделенную заметку на одну позицию вниз
  const moveDown = () => {
    if (!canMoveDown) return;
    move(notes[index].id, 'down');
  };

  return { canMoveUp, canMoveDown, moveUp, moveDown };
};
