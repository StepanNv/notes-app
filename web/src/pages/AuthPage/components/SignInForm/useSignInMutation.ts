import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { SignInDto } from '../../../../api/generated/data-contracts';
import { authController } from '../../../../api/auth-controller';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';

type AuthErrorResponse = {
  code?: string;
  message?: string;
};

export const useSignInMutation = () => {
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (formData: SignInDto) =>
      authController.authControllerSignIn(formData),
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
