import UserMenuDropdownItem from '../UserMenuDropdownItem/UserMenuDropdownItem';
import styles from './UserMenuDropdown.module.scss';
import { useDropdownActions } from './useDropdownActions';

const UserMenuDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const { logout } = useDropdownActions();

  return (
    isOpen && (
      <div className={`${styles.userMenuDropdown}`}>
        <div className={styles.dropdownContent}>
          <UserMenuDropdownItem>Settings</UserMenuDropdownItem>
          <UserMenuDropdownItem onClick={logout}>Log out</UserMenuDropdownItem>
        </div>
      </div>
    )
  );
};
export default UserMenuDropdown;
