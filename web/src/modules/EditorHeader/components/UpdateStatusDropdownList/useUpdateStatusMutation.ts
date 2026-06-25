import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { UpdateStatusDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { updateNoteStatus } from '../../api/update-note-status';
import { useQueryClient } from '@tanstack/react-query';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';

export const useUpdateStatusMutation = () => {
  const queryClient = useQueryClient();
  const addError = useErrorsStore((state) => state.addError);
  const clearSelectedNotes = useNotesSelectionStore((state) => state.clear);

  return useMutation({
    mutationFn: (data: UpdateStatusDto) => updateNoteStatus(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      clearSelectedNotes();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error.response?.data?.message;
      if (message) {
        addError(message);
      } else {
        addError('Something went wrong. Please try again later.');
      }
    },
  });
};
