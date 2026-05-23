import { useState, useRef } from 'react';
import styles from './UserMenu.module.scss';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { useAuthStore } from '../../../../stores/useAuthStore';

const UserMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useClickOutside(menuRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });

  const logout = () => {
    setAccessToken(null);
    router(`/`);
  };

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <button
        className={styles.userNameBtn}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        username
      </button>
      {isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>Settings</div>
          <div className={styles.dropdownItem} onClick={logout}>
            Log out
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
