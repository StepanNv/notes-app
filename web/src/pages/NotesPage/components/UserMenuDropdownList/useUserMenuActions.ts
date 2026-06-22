import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from './useLogoutMutation';

export const useUserMenuActions = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogoutMutation();

  const logout = () => {
    logoutMutation.mutate();
    navigate('/');
  };

  return { logout };
};
