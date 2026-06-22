import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { authController } from '../../../../api/auth-controller';
import { useAuthStore } from '../../../../stores/useAuthStore';

export const useLogoutMutation = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation({
    mutationFn: () => authController.authControllerLogout(),
    onSuccess: () => {
      setAccessToken(null);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error.response?.data?.message);
    },
  });
};
