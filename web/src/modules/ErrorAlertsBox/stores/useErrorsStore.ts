import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TError = {
  id: string;
  title: string;
  message: string;
};

type TUseErrorsStore = {
  errors: TError[];
  addError: (message: string) => void;
  removeError: (errorId: string) => void;
};

export const useErrorsStore = create<TUseErrorsStore>()((set) => ({
  errors: [],
  addError: (message: string) => {
    set((state) => ({
      errors: [...state.errors, { id: uuidv4(), title: 'Error', message }],
    }));
  },
  removeError: (errorId: string) => {
    set((state) => ({
      errors: state.errors.filter((error) => error.id !== errorId),
    }));
  },
}));
