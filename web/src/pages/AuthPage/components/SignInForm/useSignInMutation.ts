import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { LoginDto } from '../../../../api/generated/data-contracts';
import { authController } from '../../../../api/auth-controller';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';

export const useSignInMutation = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const addError = useErrorsStore((state) => state.addError);

  return useMutation({
    mutationFn: (formData: LoginDto) =>
      authController.authControllerLogin(formData),
    onSuccess: (data) => {
      setAccessToken(data.data.accessJwt);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error.response?.data?.message;
      if (message) {
        addError('Error', message);
      } else {
        addError('Error', 'Something went wrong. Please try again later.');
      }
    },
  });
};
