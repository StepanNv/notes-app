import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const language = useAppSettingsStore((state) => state.language);
  const setLanguage = useAppSettingsStore((state) => state.setLanguage);

  const handleLanguageChange = (language: 'en' | 'ru') => {
    setLanguage(language);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageSwitcherBtn} ${language === 'ru' ? styles.selected : ''}`}
        onClick={() => handleLanguageChange('ru')}
      >
        Русский
      </button>
      <button
        className={`${styles.languageSwitcherBtn} ${language === 'en' ? styles.selected : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
    </div>
  );
};
export default LanguageSwitcher;
