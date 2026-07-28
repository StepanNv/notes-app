import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { verifyEmail } from '../../api/verify-email';
import { useMutation } from '@tanstack/react-query';
import type { ConfirmEmailVerificationDto } from '../../../../api/generated/data-contracts';
import type { AxiosError } from 'axios';

export const useVerifyEmailMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (data: ConfirmEmailVerificationDto) =>
      verifyEmail(data.email, data.confirmationCode),
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
