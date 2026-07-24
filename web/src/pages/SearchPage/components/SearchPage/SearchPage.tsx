import styles from './SearchPage.module.scss';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import SearchPageHeader from '../SearchPageHeader/SearchPageHeader';
import { useDebouncedSearchQuery } from './useDebouncedSearchQuery';
import { EditorHeader } from '../../../../modules/EditorHeader';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { UpdateColorModal } from '../../../../modules/UpdateColorModal';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SearchPage = () => {
  const language = useAppSettingsStore((state) => state.language);
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

      <main className={styles.main}>
        {debouncedSearchQuery ? (
          <InfiniteNotesList
            query={{
              status: 'default',
              search: debouncedSearchQuery,
              limit: 7,
            }}
          />
        ) : (
          <div className={styles.emptySearchQuery}>
            {language === 'en'
              ? 'Enter something to search'
              : 'Введите запрос для поиска'}
          </div>
        )}
      </main>

      <UpdateColorModal />
    </>
  );
};

export default SearchPage;
