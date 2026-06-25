import { useInfiniteQuery } from '@tanstack/react-query';
import { getNotes } from '../../api/get-notes';
import type { NotesControllerGetManyParams } from '../../../../api/generated/data-contracts';

export const useInfiniteNotesQuery = (query: NotesControllerGetManyParams) => {
  return useInfiniteQuery({
    queryKey: ['notes'],
    queryFn: async ({ pageParam }) => {
      // pageParam - информирует о том с какой заметки начинать загружать данные
      const res = await getNotes({
        status: query.status,
        sort: query.sort,
        limit: query.limit,
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
  });
};
