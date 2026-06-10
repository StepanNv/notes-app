import {
  type InfiniteData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { getNote } from '../../api/get-note';
import type { GetNotesResDto } from '../../../../api/generated/data-contracts';

export const useGetNote = (id?: string) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getNote(id!), // говорим typescript, что id точно не undefined, потому что мы проверяем это в enabled
    initialData: () => {
      const hashedNote = queryClient
        .getQueryData<InfiniteData<GetNotesResDto>>(['notes'])
        ?.pages.flatMap((page) => page.notes)
        .find((note) => note.id === id);

      return hashedNote ? { note: hashedNote } : undefined;
    },
    staleTime: Infinity,
    enabled: !!id, // запрос не будет выполняться, если id falsy
  });

  return { data, isLoading, isError, error };
};
