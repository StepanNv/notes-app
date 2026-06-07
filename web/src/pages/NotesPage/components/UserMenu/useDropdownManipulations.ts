import { useRef, useState } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';

export const useDropdownManipulations = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const userMenuRef = useRef(null);

  useClickOutside(userMenuRef, () => {
    if (isDropdownOpen) setDropdownOpen(false);
  });
  return { isDropdownOpen, setDropdownOpen, userMenuRef };
};
