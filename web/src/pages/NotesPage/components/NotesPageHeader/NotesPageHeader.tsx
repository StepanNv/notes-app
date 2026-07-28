import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenuDropdown from '../UserMenuDropdown/UserMenuDropdown';
import NavBar from '../../../../components/NavBar/NavBar';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    currentPage: 'Notes',
  },
  ru: {
    currentPage: 'Заметки',
  },
};

const NotesPageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage={content.currentPage} />
        <SearchNotesBox />
        <UserMenuDropdown />
      </div>
    </Header>
  );
};

export default NotesPageHeader;
