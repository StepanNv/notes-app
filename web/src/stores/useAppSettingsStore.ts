import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TAppSettingsStore = {
  theme: 'light' | 'dark';
  language: 'en' | 'ru';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'en' | 'ru') => void;
};

export const useAppSettingsStore = create<TAppSettingsStore>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'app-settings',
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    },
  ),
);

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { useAuthStore } from './useAuthStore';
// import { useGetMyProfile } from '../hooks/useGetMyProfile';
// import type { GetMeResDto } from '../api/generated/data-contracts';

// type TAppSettingsStore = {
//   theme: 'light' | 'dark';
//   language: 'en' | 'ru';
//   toggleTheme: () => void;
//   setLanguage: (language: 'en' | 'ru') => void;
// };

// const getTheme = (isAuth: boolean, myProfileData: GetMeResDto | undefined) => {
//   if (isAuth) {
//     return window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? 'dark'
//       : 'light';
//   } else {
//     if (myProfileData) {
//       return myProfileData.theme;
//     } else {
//       return window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light';
//     }
//   }
// };

// const getLanguage = (
//   isAuth: boolean,
//   myProfileData: GetMeResDto | undefined,
// ) => {
//   if (isAuth) {
//     return navigator.language.startsWith('en') ? 'en' : 'ru';
//   } else {
//     if (myProfileData) {
//       return myProfileData.language;
//     } else {
//       return navigator.language.startsWith('en') ? 'en' : 'ru';
//     }
//   }
// };

// export const useAppSettingsStore = () => {
//   const isAuth = useAuthStore((state) => state.accessToken) ? true : false;
//   const { data: myProfileData } = useGetMyProfile(isAuth);

//   return create<TAppSettingsStore>()(
//     persist(
//       (set) => ({
//         theme: getTheme(isAuth, myProfileData),
//         language: getLanguage(isAuth, myProfileData),
//         toggleTheme: () =>
//           set((state) => ({
//             theme: state.theme === 'light' ? 'dark' : 'light',
//           })),
//         setLanguage: (language: 'en' | 'ru') => set({ language }),
//       }),
//       {
//         name: 'app-settings',
//         partialize: (state) => ({
//           theme: state.theme,
//           language: state.language,
//         }),
//       },
//     ),
//   );
// };
