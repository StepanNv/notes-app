import { useEffect } from 'react';
import { useAppSettingsStore } from '../stores/useAppSettingsStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useGetMe } from './useGetMe';

export const useSyncAppSettings = () => {
  const isAuth = useAuthStore((state) => state.accessToken) ? true : false;
  const { data: myData } = useGetMe();
  const setTheme = useAppSettingsStore((state) => state.setTheme);
  const setLanguage = useAppSettingsStore((state) => state.setLanguage);
  const theme = useAppSettingsStore((state) => state.theme);

  useEffect(() => {
    if (isAuth && myData) {
      setTheme(myData.theme);
      setLanguage(myData.language);
    } else {
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
      setLanguage(navigator.language.startsWith('en') ? 'en' : 'ru');
    }
  }, [isAuth, myData]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
};
