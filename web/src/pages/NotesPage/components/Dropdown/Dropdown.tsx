import DropdownItem from '../DropdownItem/DropdownItem';
import styles from './Dropdown.module.scss';
import { useDropdownActions } from './useDropdownActions';

const Dropdown = ({ isOpen }: { isOpen: boolean }) => {
  const { logout } = useDropdownActions();

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
