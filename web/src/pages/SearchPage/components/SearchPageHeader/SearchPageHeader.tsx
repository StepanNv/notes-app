import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './SearchPageHeader.module.scss';

const SearchPageHeader = () => {
  return (
    <Header>
      <Link className={styles.backBtn} to={'/notes'}>
        Back
      </Link>
      <input
        // value={searchQuery}
        // onChange={(e) => onSetSearchQuery(e.target.value)}
        className={styles.searchInput}
        type="text"
        placeholder="Search notes"
        autoFocus
      />
    </Header>
  );
};
export default SearchPageHeader;
