import SortBtn from '../../ui/SortBtn/SortBtn';
import styles from './SearchNotesBox.module.scss';

const SearchNotesBox = () => {
  return (
    <div className={styles.searchNotesBox}>
      <div className={styles.searchBoxText}>Search notes</div>
      <SortBtn />
    </div>
  );
};
export default SearchNotesBox;
