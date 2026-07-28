import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { SignUpDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { useMessagesStore } from '../../../../modules/MessageAlertsBox/index';
import { signUp } from '../../api/sign-up';

export const useSignUpMutation = () => {
  const addError = useErrorsStore((state) => state.addError);
  const addMessage = useMessagesStore((state) => state.addMessage);

  return useMutation({
    mutationFn: (formData: SignUpDto) => signUp(formData),
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
