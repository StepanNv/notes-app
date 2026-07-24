import styles from './InfiniteNotesList.module.scss';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import { useInfiniteNotesQuery } from './useInfiniteNotesQuery';
import { useInfiniteScrollTrigger } from './useInfiniteScrollTrigger';
import type { NotesControllerGetManyParams } from '../../../../api/generated/data-contracts';
import { useEffect } from 'react';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const InfiniteNotesList = ({
  query,
}: {
  query: NotesControllerGetManyParams;
}) => {
  const language = useAppSettingsStore((state) => state.language);
  const {
    data,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteNotesQuery(query);
  const { ref } = useInfiniteScrollTrigger(fetchNextPage);
  const isSelected = useNotesSelectionStore((state) => state.isSelected);
  const clearSelectedNotes = useNotesSelectionStore((state) => state.clear);

  useEffect(() => () => clearSelectedNotes(), []);

  const notes = data?.pages.flatMap((page) => page.notes) ?? [];

  if (isLoading) {
    return (
      <div className={styles.loading}>
        {language === 'en' ? 'Loading...' : 'Загрузка...'}
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.error}>
        {language === 'en'
          ? 'Something went wrong. Please try again later.'
          : 'Что-то пошло не так. Пожалуйста, попробуйте позже.'}
      </div>
    );
  }

  return (
    <ul className={styles.infiniteNotesList}>
      {notes.length ? (
        <>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              status={note.status}
              colorKey={note.colorKey}
              isSelected={isSelected(note.id)}
            />
          ))}
          {isFetchingNextPage ? (
            <div>{language === 'en' ? 'Loading...' : 'Загрузка...'}</div>
          ) : (
            hasNextPage && <div ref={ref} />
          )}
        </>
      ) : (
        <NoNotesContent />
      )}
    </ul>
  );
};

export default InfiniteNotesList;
