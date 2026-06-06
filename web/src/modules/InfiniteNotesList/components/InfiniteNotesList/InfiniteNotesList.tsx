import styles from './InfiniteNotesList.module.scss';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import { useInfiniteNotesQuery } from './useInfiniteNotesQuery';
import { useInfiniteScrollTrigger } from './useInfiniteScrollTrigger';

const InfiniteNotesList = () => {
  const {
    data,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteNotesQuery();
  const { ref } = useInfiniteScrollTrigger({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

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
            <NoteItem key={note.id} id={note.id} title={note.title} text={note.text} />
          ))}
          {isFetchingNextPage ? <div>Loading...</div> : hasNextPage && <div ref={ref} />}
        </>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
