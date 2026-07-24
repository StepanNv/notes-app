import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/index';
import { updateMe } from '../../api/update-me';

export const useUpdateLanguageMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (language: 'en' | 'ru') => updateMe({ language: language }),
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
