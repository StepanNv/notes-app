import { useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  ignoreElementRef: React.RefObject<T | null>,
  callback: () => void,
) => {
  useEffect(() => {
    // функция объявлена, но не вызвана
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ignoreElementRef.current &&
        !ignoreElementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    // cleanup function
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ignoreElementRef, callback]);
};
