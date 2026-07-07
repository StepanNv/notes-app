import SortBtn from '../SortBtn/SortBtn';
import styles from './SearchNotesBox.module.scss';
import { useModalStore } from '../../../../stores/useModalStore';
import { useNavigate } from 'react-router-dom';

const SearchNotesBox = () => {
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  return (
    <div className={styles.searchNotesBox} onClick={() => navigate('/search')}>
      <div className={styles.searchBoxText}>Search notes</div>
      <SortBtn onClick={() => openModal('sort')} />
    </div>
  );
};
export default SearchNotesBox;
