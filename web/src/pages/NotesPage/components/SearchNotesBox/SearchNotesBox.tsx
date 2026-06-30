import SortBtn from '../SortBtn/SortBtn';
import styles from './SearchNotesBox.module.scss';
import { useModalStore } from '../../../../stores/useModalStore';

const SearchNotesBox = () => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className={styles.searchNotesBox}>
      <div className={styles.searchBoxText}>Search notes</div>
      <SortBtn onClick={() => openModal('sort')} />
    </div>
  );
};
export default SearchNotesBox;
