import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { confirmEmail } from '../../api/confirm-email';
import { useMutation } from '@tanstack/react-query';
import { useMessagesStore } from '../../../../modules/MessageAlertsBox/index';
import type { ConfirmationDto } from '../../../../api/generated/data-contracts';
import type { AxiosError } from 'axios';

export const useConfirmCodeMutation = () => {
  const addError = useErrorsStore((state) => state.addError);
  const addMessage = useMessagesStore((state) => state.addMessage);

  return useMutation({
    mutationFn: (data: ConfirmationDto) =>
      confirmEmail(data.confirmationEmail, data.confirmationCode),
    onSuccess: (data) => {
      addMessage(data.data.message);
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
