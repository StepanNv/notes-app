import { create } from 'zustand';

type NotesSortStore = {
  sort: 'custom' | 'created_at' | 'updated_at';
  setSort: (sort: 'custom' | 'created_at' | 'updated_at') => void;
};

export const useNotesSortStore = create<NotesSortStore>((set) => ({
  sort: 'custom',
  setSort: (sort) => set({ sort }),
}));
