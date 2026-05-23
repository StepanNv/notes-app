import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../stores/useAuthStore';
import DropdownItem from '../DropdownItem/DropdownItem';
import styles from './Dropdown.module.scss';

const Dropdown = ({ isOpen }: { isOpen: boolean }) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const router = useNavigate();
  const logout = () => {
    setAccessToken(null);
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
