import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useUpdateThemeMutation } from './useUpdateThemeMutation';

export const useUpdateTheme = () => {
  let themeOnClient = useAppSettingsStore((state) => state.theme);
  const updateThemeOnClient = useAppSettingsStore((state) => state.toggleTheme);
  const updateThemeOnServer = useUpdateThemeMutation();

  if (themeOnClient === 'light') {
    themeOnClient = 'dark';
  } else {
    themeOnClient = 'light';
  }
  
  return () => {
    updateThemeOnClient();
    updateThemeOnServer.mutate(themeOnClient);
  };
};
