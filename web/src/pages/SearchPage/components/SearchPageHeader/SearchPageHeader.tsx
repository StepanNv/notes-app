import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './SearchPageHeader.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

type TSearchPageHeaderProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

const SearchPageHeader = ({
  searchQuery,
  setSearchQuery,
}: TSearchPageHeaderProps) => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <Link className={styles.backBtn} to={'/notes'}>
        {language === 'en' ? 'Back' : 'Назад'}
      </Link>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={language === 'en' ? 'Search notes' : 'Поиск заметок'}
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Header>
  );
};

export default SearchPageHeader;