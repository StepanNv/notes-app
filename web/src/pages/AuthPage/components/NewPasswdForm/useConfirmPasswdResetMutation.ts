import { useMutation } from '@tanstack/react-query';
import type { ConfirmPasswdResetDto } from '../../../../api/generated/data-contracts';
import { confirmPasswdReset } from '../../api/confirm-passwd-reset';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';

export const useConfirmPasswdResetMutation = () => {
  const addError = useErrorsStore((state) => state.addError);
  
  return useMutation({
    mutationFn: (formData: ConfirmPasswdResetDto) =>
      confirmPasswdReset(
        formData.email,
        formData.newPassword,
        formData.confirmationCode,
      ),
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
