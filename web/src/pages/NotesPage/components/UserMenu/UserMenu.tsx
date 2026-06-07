import styles from './UserMenu.module.scss';
import Dropdown from '../UserMenuDropdown/UserMenuDropdown';
import { useDropdownManipulations } from './useDropdownManipulations';
import { useGetMyProfile } from '../../../../hooks/useGetMyProfile';

const UserMenu = () => {
  const { isDropdownOpen, setDropdownOpen, userMenuRef } =
    useDropdownManipulations();

  const { data, isLoading, isError } = useGetMyProfile();

  return (
    <div className={styles.userMenu} ref={userMenuRef}>
      <button
        className={styles.userNameBtn}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {isLoading || isError ? 'Loading...' : data?.data.username}
      </button>
      <Dropdown isOpen={isDropdownOpen} />
    </div>
  );
};
export default UserMenu;
