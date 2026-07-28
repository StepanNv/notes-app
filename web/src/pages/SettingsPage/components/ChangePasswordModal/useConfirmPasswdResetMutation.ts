import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { ConfirmPasswdResetDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { confirmPasswdReset } from '../../api/confirm-passwd-reset';

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
