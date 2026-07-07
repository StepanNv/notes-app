import styles from './SearchPage.module.scss';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import SearchPageHeader from '../SearchPageHeader/SearchPageHeader';
import { useDebouncedSearchQuery } from './useDebouncedSearchQuery';
import { EditorHeader } from '../../../../modules/EditorHeader';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { UpdateColorModal } from '../../../../modules/UpdateColorModal';

const SearchPage = () => {
  const { searchQuery, setSearchQuery, debouncedSearchQuery } =
    useDebouncedSearchQuery();
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);

  return (
    <>
      {selectedNotes.size > 0 ? (
        <EditorHeader currentPage="notes" />
      ) : (
        <SearchPageHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {debouncedSearchQuery ? (
        <InfiniteNotesList
          query={{ status: 'default', search: debouncedSearchQuery, limit: 7 }}
        />
      ) : (
        <div className={styles.emptySearchQuery}>Enter something to search</div>
      )}

      <UpdateColorModal />
    </>
  );
};
export default SearchPage;
