import { useNavigate } from 'react-router-dom';
import { useSignOutMutation } from './useSignOutMutation';

export const useUserMenuActions = () => {
  const navigate = useNavigate();
  const signOutMutation = useSignOutMutation();

  const navigateToSettings = () => {
    navigate('/settings');
  };

  const signOut = () => {
    signOutMutation.mutate();
    navigate('/');
  };

  return { signOut, navigateToSettings };
};
