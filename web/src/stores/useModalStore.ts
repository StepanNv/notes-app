import { create } from 'zustand';

type TModal =
  | 'sort'
  | 'updateNotesColor'
  | 'changeUsername'
  | 'changePassword';

type TModalStore = {
  openedModal: TModal | null;
  openModal: (modal: TModal) => void;
  closeModal: () => void;
};
export const useModalStore = create<TModalStore>((set) => ({
  openedModal: null,
  openModal: (modal: TModal) => set({ openedModal: modal }),
  closeModal: () => set({ openedModal: null }),
}));
