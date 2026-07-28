import { useUpdateStatusMutation } from './useUpdateStatusMutation';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import type { NoteDto } from '../../../../api/generated/data-contracts';

type UpdateStatusParams = {
  currentPage: 'notes' | 'archive' | 'trash';
  action: 'archive' | 'unarchive' | 'trash' | 'restore';
};

const CURRENT_STATUS_FROM_PAGE: Record<string, NoteDto['status']> = {
  notes: 'default',
  archive: 'archived',
  trash: 'trashed',
};

const SELECTED_STATUS_FROM_ACTION: Record<string, NoteDto['status']> = {
  archive: 'archived',
  unarchive: 'default',
  trash: 'trashed',
  restore: 'default',
};

export const useUpdateStatus = () => {
  const updateStatusMutation = useUpdateStatusMutation();
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);

  const updateStatus = ({ currentPage, action }: UpdateStatusParams) => {
    const currentStatus = CURRENT_STATUS_FROM_PAGE[currentPage];
    const selectedStatus = SELECTED_STATUS_FROM_ACTION[action];
    updateStatusMutation.mutate({
      noteIds: Array.from(selectedNotes).map((note) => note.id),
      currentStatus,
      selectedStatus,
    });
  };
  return { updateStatus };
};
