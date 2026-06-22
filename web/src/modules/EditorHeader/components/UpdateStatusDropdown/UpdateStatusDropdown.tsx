import styles from './UpdateStatusDropdown.module.scss';
import { useDropdown } from '../../../../hooks/useDropdown';
import UpdateStatusDropdownList from '../UpdateStatusDropdownList/UpdateStatusDropdownList';
import MoreBtn from '../MoreBtn/MoreBtn';

const UpdateStatusDropdown = () => {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useDropdown();

  return (
    <div className={styles.updateStatusDropdown} ref={dropdownRef}>
      <MoreBtn onClick={() => setDropdownOpen(!isDropdownOpen)} />
      <UpdateStatusDropdownList isOpen={isDropdownOpen} />
    </div>
  );
};
export default UpdateStatusDropdown;
