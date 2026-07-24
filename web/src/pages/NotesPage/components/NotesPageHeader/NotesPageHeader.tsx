import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenuDropdown from '../UserMenuDropdown/UserMenuDropdown';
import NavBar from '../../../../components/NavBar/NavBar';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const NotesPageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage={language === 'en' ? 'Notes' : 'Заметки'} />
        <SearchNotesBox />
        <UserMenuDropdown />
      </div>
    </Header>
  );
};

export default NotesPageHeader;
