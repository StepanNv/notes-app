import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    // cleanup function
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
};
