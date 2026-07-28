import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useUpdateThemeMutation } from './useUpdateThemeMutation';

export const useUpdateTheme = () => {
  let themeOnClient = useAppSettingsStore((state) => state.theme);
  const setThemeOnClient = useAppSettingsStore((state) => state.setTheme);
  const updateThemeOnServer = useUpdateThemeMutation();

  if (themeOnClient === 'light') {
    themeOnClient = 'dark';
  } else {
    themeOnClient = 'light';
  }

  return () => {
    setThemeOnClient(themeOnClient);
    updateThemeOnServer.mutate(themeOnClient);
  };
};
