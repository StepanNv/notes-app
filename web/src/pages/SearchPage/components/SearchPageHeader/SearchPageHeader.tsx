import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './SearchPageHeader.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    backBtn: 'Back',
    searchPlaceholder: 'Search notes',
  },
  ru: {
    backBtn: 'Назад',
    searchPlaceholder: 'Поиск заметок',
  },
};

type TSearchPageHeaderProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

const SearchPageHeader = ({
  searchQuery,
  setSearchQuery,
}: TSearchPageHeaderProps) => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <Link className={styles.backBtn} to={'/notes'}>
        {content.backBtn}
      </Link>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={content.searchPlaceholder}
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Header>
  );
};

export default SearchPageHeader;
