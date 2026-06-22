import { useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

export const useDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef= useRef(null);

  useClickOutside(dropdownRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });
  return { isDropdownOpen, setDropdownOpen, dropdownRef };
};
