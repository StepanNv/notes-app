import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../stores/useAuthStore';
import DropdownItem from '../DropdownItem/DropdownItem';
import styles from './Dropdown.module.scss';
import { useMutation } from '@tanstack/react-query';
import { authController } from '../../../../api/auth-controller';
import type { AxiosError } from 'axios';

const Dropdown = ({ isOpen }: { isOpen: boolean }) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const logoutMutation = useMutation({
    mutationFn: () => authController.authControllerLogout(),
    onSuccess: () => {
      setAccessToken(null);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error.response?.data?.message);
    },
  });

  const router = useNavigate();
  const logout = () => {
    logoutMutation.mutate();
    router(`/`);
  };

  return (
    isOpen && (
      <div className={`${styles.dropdown}`}>
        <div className={styles.dropdownContent}>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem onClick={logout}>Log out</DropdownItem>
        </div>
      </div>
    )
  );
};
export default Dropdown;
