import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import SearchPageHeader from '../SearchPageHeader/SearchPageHeader';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <>
      <SearchPageHeader />
      <main className={styles.main}>
        <InfiniteNotesList />
      </main>
    </>
  );
};
export default SearchPage;
