import { useState, useRef } from 'react';
import styles from './UserMenu.module.scss';
// import { useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../../../hooks/useClickOutside';

const UserMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  // const router = useNavigate();

  useClickOutside(menuRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });

  // const logout = () => {
  //   localStorage.setItem('auth', 'false');
  //   setIsAuth(false);
  //   router(`/`);
  // };

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
          <div className={styles.dropdownItem}>Log out</div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
