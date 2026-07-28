import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScrollTrigger = (fetchNextPage: () => void) => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (entry && inView) {
      fetchNextPage();
    }
  }, [entry]);

  return { ref };
};
