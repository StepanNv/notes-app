import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TAuthStore = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
};

export const useAuthStore = create<TAuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string | null) => {
        set({ accessToken });
      },
    }),
    {
      name: 'auth',
      partialize: (state) => ({ accessToken: state.accessToken }),
    },
  ),
);
