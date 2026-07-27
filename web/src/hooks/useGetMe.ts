import { useQuery } from '@tanstack/react-query';
import { usersController } from '../api/users-controller';

export const useGetMe = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => usersController.usersControllerGetMe(),
    staleTime: 1000 * 60 * 5,
  });

  return { data: data?.data, isLoading, isError };
};
