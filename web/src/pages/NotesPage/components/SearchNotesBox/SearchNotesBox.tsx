import SortBtn from '../SortBtn/SortBtn';
import styles from './SearchNotesBox.module.scss';
import { useModalStore } from '../../../../stores/useModalStore';
import { useNavigate } from 'react-router-dom';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SearchNotesBox = () => {
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();
  const language = useAppSettingsStore((state) => state.language);

  return (
    <div className={styles.searchNotesBox} onClick={() => navigate('/search')}>
      <div className={styles.searchBoxText}>
        {language === 'en' ? 'Search notes' : 'Поиск заметок'}
      </div>
      <SortBtn onClick={() => openModal('sort')} />
    </div>
  );
};

export default SearchNotesBox;
