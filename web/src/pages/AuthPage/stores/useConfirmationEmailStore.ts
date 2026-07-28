import { create } from 'zustand';

type TUseConfirmationEmailStore = {
  confirmationEmail: string;
  trueEnteredPassword: string;
  setConfirmationEmail: (confirmationEmail: string) => void;
  setTrueEnteredPassword: (trueEnteredPassword: string) => void;
};

export const useConfirmationEmailStore = create<TUseConfirmationEmailStore>(
  (set) => ({
    confirmationEmail: '',
    trueEnteredPassword: '',
    setConfirmationEmail: (confirmationEmail: string) =>
      set({ confirmationEmail }),
    setTrueEnteredPassword: (trueEnteredPassword: string) =>
      set({ trueEnteredPassword }),
  }),
);
