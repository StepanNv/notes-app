import styles from './UserMenu.module.scss';
import Dropdown from '../UserMenuDropdown/UserMenuDropdown';
import { useQuery } from '@tanstack/react-query';
import { getUsername } from '../../api/get-username';
import { useDropdownManipulations } from './useDropdownManipulations';

const UserMenu = () => {
  const { isDropdownOpen, setDropdownOpen, userMenuRef } =
    useDropdownManipulations();

  const {
    data: username,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['username'],
    queryFn: getUsername,
  });

  return (
    <div className={styles.userMenu} ref={userMenuRef}>
      <button
        className={styles.userNameBtn}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {isLoading || isError ? 'Loading...' : username}
      </button>
      <Dropdown isOpen={isDropdownOpen} />
    </div>
  );
};
export default UserMenu;
