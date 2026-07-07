import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './SearchPageHeader.module.scss';

type TSearchPageHeaderProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};
const SearchPageHeader = ({
  searchQuery,
  setSearchQuery,
}: TSearchPageHeaderProps) => {
  return (
    <Header>
      <Link className={styles.backBtn} to={'/notes'}>
        Back
      </Link>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search notes"
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Header>
  );
};
export default SearchPageHeader;
