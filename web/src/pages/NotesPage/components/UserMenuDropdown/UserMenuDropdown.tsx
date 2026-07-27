import styles from './UserMenuDropdown.module.scss';
import UserMenuDropdownList from '../UserMenuDropdownList/UserMenuDropdownList';
import { useDropdown } from '../../../../hooks/useDropdown';
import { useGetMe } from '../../../../hooks/useGetMe';

const UserMenuDropdown = () => {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useDropdown();
  const { data, isLoading, isError } = useGetMe();

  return (
    <div className={styles.userMenuDropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {isLoading || isError ? 'Loading...' : data?.username}
      </button>
      <UserMenuDropdownList isOpen={isDropdownOpen} />
    </div>
  );
};
export default UserMenuDropdown;
