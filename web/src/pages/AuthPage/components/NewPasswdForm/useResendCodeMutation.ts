import type { PasswdResetDto } from '../../../../api/generated/data-contracts';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { passwdReset } from '../../api/passwd-reset';

export const useResendCodeMutation = () => {
  const addError = useErrorsStore((state) => state.addError);
  return useMutation({
    mutationFn: (formData: PasswdResetDto) => passwdReset(formData.email),
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error.response?.data?.message;
      if (message) {
        addError(message);
      }
    },
  });
};
