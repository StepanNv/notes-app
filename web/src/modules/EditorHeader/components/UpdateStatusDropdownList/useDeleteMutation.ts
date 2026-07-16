import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNotes } from '../../api/delete-notes';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../ErrorAlertsBox/stores/useErrorsStore';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';

export const useDeleteMutation = () => {
  const queryClient = useQueryClient();
  const addError = useErrorsStore((state) => state.addError);
  const clearSelectedNotes = useNotesSelectionStore((state) => state.clear);

  return useMutation({
    mutationFn: (noteIds: string[]) => deleteNotes(noteIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      clearSelectedNotes();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error.response?.data?.message;
      if (message) {
        addError(message);
      }
    },
  });
};
