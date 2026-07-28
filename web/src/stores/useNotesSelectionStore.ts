import { create } from 'zustand';
import { NOTE_COLORS } from '../consts/noteColors';

type SelectedNote = {
  id: string;
  colorKey: keyof typeof NOTE_COLORS;
};

type TNotesSelectionStore = {
  selectedNotes: Set<SelectedNote>;
  add: (note: SelectedNote) => void;
  remove: (noteId: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
};

export const useNotesSelectionStore = create<TNotesSelectionStore>(
  (set, get) => ({
    selectedNotes: new Set(),
    add: (note: SelectedNote) =>
      set((state) => {
        const next = new Set(state.selectedNotes);
        next.has(note) ? next.delete(note) : next.add(note);
        return { selectedNotes: next };
      }),
    remove: (noteId: string) =>
      set((state) => {
        const selectedNotes = state.selectedNotes;
        const removingNote = Array.from(selectedNotes).find(
          (note) => note.id === noteId,
        );

        if (!removingNote) return { selectedNotes: state.selectedNotes };

        const next = new Set(state.selectedNotes);
        next.delete(removingNote);
        return { selectedNotes: next };
      }),
    clear: () => set({ selectedNotes: new Set() }),
    isSelected: (noteId: string) => {
      const selectedNotes = get().selectedNotes;
      return Array.from(selectedNotes).some((note) => note.id === noteId);
    },
  }),
);
