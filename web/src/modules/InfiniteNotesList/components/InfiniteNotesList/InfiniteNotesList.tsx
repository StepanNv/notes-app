import styles from './InfiniteNotesList.module.scss';
import { useInfiniteQuery } from '@tanstack/react-query';
import { notesController } from '../../api/notes-controller';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const InfiniteNotesList = () => {
  const { ref, inView, entry } = useInView();

  const { data, fetchNextPage, isError, isLoading, isFetchingNextPage } =
  useInfiniteQuery({
    queryKey: ['notes'],
    queryFn: async ({ pageParam }) => {
      const res = await notesController.notesControllerGetNotes(
        {},
        {
          status: 'default',
          sort: 'created_at',
          limit: 7,
          ...(pageParam ? { last_id: pageParam } : {}),
        },
      );

      return res.data;
    },
    initialPageParam: '',
    getNextPageParam: (lastPage) => {
      if (!lastPage?.meta?.next_last_id) {
        return undefined;
      }
      return lastPage?.meta?.next_last_id;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (entry && inView) {
      fetchNextPage();
    }
  }, [entry]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.infiniteNotesList}>
      {data?.pages[0]?.data.length ? (
        <>
          {data?.pages.length &&
            data?.pages.map((page) => (
              page?.data.map((note) => (
                <NoteItem key={note.id} title={note.title} text={note.text} />
              ))
            ))}
          {isFetchingNextPage ? <div>Loading...</div> : <div ref={ref} />}
        </>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
