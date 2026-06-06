import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from './useLogoutMutation';

export const useDropdownActions = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogoutMutation();

  const logout = () => {
    logoutMutation.mutate();
    navigate('/');
  };

  return { logout };
};
