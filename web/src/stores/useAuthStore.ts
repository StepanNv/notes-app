import { create } from 'zustand';

type TUseAuthStore = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

export const useAuthStore = create<TUseAuthStore>()((set) => ({
  isAuth: true,
  setIsAuth: (value: boolean) => set({ isAuth: value }),
}));
