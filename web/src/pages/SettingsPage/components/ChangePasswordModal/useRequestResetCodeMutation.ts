import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { passwdReset } from '../../api/passwd-reset';

export const useRequestResetCodeMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (email: string) => passwdReset(email),
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
