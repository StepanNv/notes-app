import { useInfiniteQuery } from '@tanstack/react-query';
import { getNotes } from '../../api/getNotes';

export const useInfiniteNotesQuery = () => {
  return useInfiniteQuery({
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

      return lastPage.next_last_id;
    },
    refetchOnWindowFocus: false,
  });
};
