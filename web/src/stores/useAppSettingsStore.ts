import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TAppSettingsStore = {
  theme: 'light' | 'dark';
  language: 'en' | 'ru';
  toggleTheme: () => void;
  setLanguage: (language: 'en' | 'ru') => void;
};

export const useAppSettingsStore = create<TAppSettingsStore>()(
  persist(
    (set) => ({
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
      language: navigator.language.startsWith('en') ? 'en' : 'ru',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setLanguage: (language: 'en' | 'ru') => set({ language }),
    }),
    {
      name: 'app-settings',
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    },
  ),
);
