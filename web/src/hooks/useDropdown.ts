import { useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

export const useDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef= useRef(null);

  useClickOutside(menuRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });
  return { isDropdownOpen, setDropdownOpen, menuRef };
};
