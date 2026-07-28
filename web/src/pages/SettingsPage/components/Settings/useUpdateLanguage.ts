import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useUpdateLanguageMutation } from './useUpdateLanguageMutation';

export const useUpdateLanguage = () => {
  let languageOnClient = useAppSettingsStore((state) => state.language);
  const updateLanguageOnClient = useAppSettingsStore(
    (state) => state.setLanguage,
  );
  const updateLanguageOnServer = useUpdateLanguageMutation();

  if (languageOnClient === 'en') {
    languageOnClient = 'ru';
  } else {
    languageOnClient = 'en';
  }

  return () => {
    updateLanguageOnClient(languageOnClient);
    updateLanguageOnServer.mutate(languageOnClient);
  };
};
