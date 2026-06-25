import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { SignUpDto } from '../../../../api/generated/data-contracts';
import { authController } from '../../../../api/auth-controller';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';

export const useSignUpMutation = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (formData: SignUpDto) =>
      authController.authControllerSignUp(formData),
    onSuccess: (data) => {
      setAccessToken(data.data.accessToken);
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
