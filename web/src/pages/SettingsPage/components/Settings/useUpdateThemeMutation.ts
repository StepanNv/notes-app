import { useMutation } from '@tanstack/react-query';
import { updateMe } from '../../api/update-me';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/index';

export const useUpdateThemeMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (theme: 'light' | 'dark') => updateMe({ theme: theme }),
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
