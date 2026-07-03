import { useEffect, useState } from 'react';
import type { NoteColorKey } from '../../../../consts/noteColors';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';

export const useColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState<NoteColorKey | null>(null);
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);

  useEffect(() => {
    const firstNote = Array.from(selectedNotes)[0];

    if (selectedNotes.size === 0) {
      setSelectedColor(null);
      return;
    }

    if (selectedNotes.size === 1) {
      setSelectedColor(firstNote.colorKey);
    }

    if (
      Array.from(selectedNotes).some(
        (note) => note.colorKey !== firstNote.colorKey,
      )
    ) {
      setSelectedColor(null);
    } else {
      setSelectedColor(firstNote.colorKey);
    }
    
  }, [selectedNotes]);

  return { selectedColor, setSelectedColor };
};
