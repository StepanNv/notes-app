import { create } from 'zustand';

type TUseConfirmationEmailStore = {
  confirmationEmail: string;
  setConfirmationEmail: (confirmationEmail: string) => void;
};

export const useConfirmationEmailStore = create<TUseConfirmationEmailStore>(
  (set) => ({
    confirmationEmail: '',
    setConfirmationEmail: (confirmationEmail: string) =>
      set({ confirmationEmail }),
  }),
);
