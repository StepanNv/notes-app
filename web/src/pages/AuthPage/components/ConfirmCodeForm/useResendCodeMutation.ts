import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { SignInDto } from '../../../../api/generated/data-contracts';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';
import { signIn } from '../../api/sign-in';

type AuthErrorResponse = {
  code?: string;
  message?: string;
};

export const useResendCodeMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (data: SignInDto) => signIn(data.email, data.password),
    onError: (error: AxiosError<AuthErrorResponse>) => {
      const message = error.response?.data?.message;
      if (message) {
        addError(message);
      } else {
        addError('Something went wrong. Please try again later.');
      }
    },
  });
};
