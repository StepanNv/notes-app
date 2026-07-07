import { useState } from 'react';
import { useDebounce } from '../../../../hooks/useDebounce';

export const useDebouncedSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return { searchQuery, setSearchQuery, debouncedSearchQuery };
};
