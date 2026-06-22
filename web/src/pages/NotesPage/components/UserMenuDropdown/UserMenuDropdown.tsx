import styles from './UserMenuDropdown.module.scss';
import UserMenuDropdownList from '../UserMenuDropdownList/UserMenuDropdownList';
import { useDropdown } from '../../../../hooks/useDropdown';
import { useGetMyProfile } from '../../../../hooks/useGetMyProfile';

const UserMenuDropdown = () => {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useDropdown();
  const { data, isLoading, isError } = useGetMyProfile();

  return (
    <div className={styles.userMenuDropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {isLoading || isError ? 'Loading...' : data?.data.username}
      </button>
      <UserMenuDropdownList isOpen={isDropdownOpen} />
    </div>
  );
};
export default UserMenuDropdown;
