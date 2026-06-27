import { create } from 'zustand';

type TModalStore = {
  openedModal: 'sort' | 'updateNotesColor' | null;
  openModal: (modal: 'sort' | 'updateNotesColor') => void;
  closeModal: () => void;
};
export const useModalStore = create<TModalStore>((set) => ({
  openedModal: null,
  openModal: (modal: 'sort' | 'updateNotesColor') =>
    set({ openedModal: modal }),
  closeModal: () => set({ openedModal: null }),
}));
