import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateColor } from '../../api/update-color';
import type { UpdateNotesColorDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../ErrorAlertsBox/index';

export const useUpdateColorMutation = () => {
  const queryClient = useQueryClient();
  const addErrorAlert = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: ({
      ids,
      colorKey,
    }: {
      ids: string[];
      colorKey: UpdateNotesColorDto['updatedColorKey'];
    }) => updateColor(ids, colorKey),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
    onError: () => {
      addErrorAlert('Something went wrong');
    },
  });
};
