import { useEffect } from 'react';

type TUseClickOutsideProps = {
  ignoreElementRef: React.RefObject<HTMLElement | null>;
  isActive: boolean;
  callback: () => void;
};

export const useClickOutside = ({
  ignoreElementRef,
  isActive,
  callback,
}: TUseClickOutsideProps) => {
  useEffect(() => {
    // функция объявлена, но не вызвана
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive &&
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
