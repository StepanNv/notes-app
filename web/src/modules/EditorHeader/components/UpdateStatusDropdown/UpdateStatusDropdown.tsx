import styles from './UpdateStatusDropdown.module.scss';
import { useDropdown } from '../../../../hooks/useDropdown';
import UpdateStatusDropdownList from '../UpdateStatusDropdownList/UpdateStatusDropdownList';
import MoreBtn from '../MoreBtn/MoreBtn';

const UpdateStatusDropdown = ({ currentPage }: { currentPage: 'notes' | 'archive' | 'trash' }) => {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useDropdown();

  return (
    <div className={styles.updateStatusDropdown} ref={dropdownRef}>
      <MoreBtn onClick={() => setDropdownOpen(!isDropdownOpen)} />
      <UpdateStatusDropdownList isOpen={isDropdownOpen} currentPage={currentPage} />
    </div>
  );
};
export default UpdateStatusDropdown;
