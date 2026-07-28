import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { UpdateMeDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { updateMe } from '../../api/update-me';

export const useUpdateMeMutation = () => {
  const queryClient = useQueryClient();
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (data: UpdateMeDto) => updateMe(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] });
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
