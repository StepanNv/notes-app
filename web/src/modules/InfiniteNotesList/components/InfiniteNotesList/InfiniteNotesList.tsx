import styles from './InfiniteNotesList.module.scss';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import { useInfiniteNotesQuery } from './useInfiniteNotesQuery';
import { useInfiniteScrollTrigger } from './useInfiniteScrollTrigger';
import type { NotesControllerGetNotesParams } from '../../../../api/generated/data-contracts';

const InfiniteNotesList = ({
  query,
}: {
  query: NotesControllerGetNotesParams;
}) => {
  const {
    data,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteNotesQuery(query);

  const { ref } = useInfiniteScrollTrigger(fetchNextPage);

  const notes = data?.pages.flatMap((page) => page.notes) ?? [];

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (isError) {
    return (
      <div className={styles.error}>
        Something went wrong. Please try again later.
      </div>
    );
  }

  return (
    <div className={styles.infiniteNotesList}>
      {notes.length ? (
        <>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              status={note.status}
            />
          ))}
          {isFetchingNextPage ? (
            <div>Loading...</div>
          ) : (
            hasNextPage && <div ref={ref} />
          )}
        </>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
