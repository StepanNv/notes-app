import { useState, useRef } from 'react';
import styles from './UserMenu.module.scss';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import Dropdown from '../UserMenuDropdown/UserMenuDropdown';
import { useQuery } from '@tanstack/react-query';
import { getUsername } from '../../api/get-username';

const UserMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });

  const {
    data: username,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['username'],
    queryFn: getUsername,
  });

  return (
    <div className={styles.userMenu} ref={menuRef}>
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
