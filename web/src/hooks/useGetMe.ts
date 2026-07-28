import { useQuery } from '@tanstack/react-query';
import { usersController } from '../api/users-controller';
import { useAuthStore } from '../stores/useAuthStore';

export const useGetMe = () => {
  const isAuth = useAuthStore((state) => state.accessToken) ? true : false;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => usersController.usersControllerGetMe(),
    staleTime: 1000 * 60 * 5,
    enabled: isAuth,
  });

  return { data: data?.data, isLoading, isError };
};
