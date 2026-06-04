import styles from './InfiniteNotesList.module.scss';
import { useInfiniteQuery } from '@tanstack/react-query';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { getNotes } from '../../api/getNotes';

const InfiniteNotesList = () => {
  const { ref, inView, entry } = useInView();

  const { data, fetchNextPage, isError, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['notes'],
      queryFn: async ({ pageParam }) => {
        const res = await getNotes({
          status: 'default',
          sort: 'created_at',
          limit: 7,
          ...(pageParam ? { last_id: pageParam } : {}),
        });

        return res.data;
      },
      initialPageParam: '',
      getNextPageParam: (lastPage) => {
        if (!lastPage?.next_last_id) {
          return undefined;
        }
        return lastPage?.next_last_id;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });

  useEffect(() => {
    if (entry && inView) {
      fetchNextPage();
    }
  }, [entry]);

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
      {data?.pages[0]?.notes.length ? (
        <>
          {data?.pages.length &&
            data?.pages.map((page) =>
              page?.notes.map((note) => (
                <NoteItem key={note.id} title={note.title} text={note.text} />
              )),
            )}
          {isFetchingNextPage ? <div>Loading...</div> : <div ref={ref} />}
        </>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
