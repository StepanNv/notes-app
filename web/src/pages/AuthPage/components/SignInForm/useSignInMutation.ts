import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { LoginDto } from '../../../../api/generated/data-contracts';
import { authController } from '../../../../api/auth-controller';
import { useAuthStore } from '../../../../stores/useAuthStore';

export const useSignInMutation = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation({
    mutationFn: (formData: LoginDto) =>
      authController.authControllerLogin(formData),
    onSuccess: (data) => {
      setAccessToken(data.data.accessJwt);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error.response?.data?.message);
    },
  });
};
