import SettingsBlock from '../../ui/SettingsBlock/SettingsBlock';
import SettingItem from '../../ui/SettingItem/SettingItem';
import styles from './Settings.module.scss';
import { ChevronRight, Globe, Lock, Sun, UserCircle } from 'lucide-react';
import { useModalStore } from '../../../../stores/useModalStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useUpdateTheme } from './useUpdateTheme';
import { useUpdateLanguage } from './useUpdateLanguage';

const contentTranlations = {
  en: {
    title: 'Settings',
    accountBlockTitle: 'Account',
    changeUsername: 'Change username',
    changePassword: 'Change password',
    appBlockTitle: 'App',
    theme: 'Theme',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    language: 'Language',
    currentLanguage: 'English',
  },
  ru: {
    title: 'Настройки',
    accountBlockTitle: 'Аккаунт',
    changeUsername: 'Сменить имя пользователя',
    changePassword: 'Сменить пароль',
    appBlockTitle: 'Приложение',
    theme: 'Тема',
    lightTheme: 'Светлая',
    darkTheme: 'Тёмная',
    language: 'Язык',
    currentLanguage: 'Русский',
  },
};

const Settings = () => {
  const openModal = useModalStore((state) => state.openModal);
  const language = useAppSettingsStore((state) => state.language);
  const currentTheme = useAppSettingsStore((state) => state.theme);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const updateTheme = useUpdateTheme();
  const updateLanguage = useUpdateLanguage();

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>{content.title}</h2>
      <SettingsBlock title={content.accountBlockTitle}>
        <SettingItem
          onClick={(e) => {
            e.stopPropagation();
            openModal('changeUsername');
          }}
        >
          <div className={styles.settingItemContent}>
            <UserCircle className={styles.icon} />
            <span className={styles.settingItemText}>
              {content.changeUsername}
            </span>
            <ChevronRight />
          </div>
        </SettingItem>
        <SettingItem
          onClick={(e) => {
            e.stopPropagation();
            openModal('changePassword');
          }}
        >
          <div className={styles.settingItemContent}>
            <Lock className={styles.icon} />
            <span className={styles.settingItemText}>
              {content.changePassword}
            </span>
            <ChevronRight />
          </div>
        </SettingItem>
      </SettingsBlock>
      <SettingsBlock title={content.appBlockTitle}>
        <SettingItem onClick={() => updateTheme()}>
          <div className={styles.settingItemContent}>
            <Sun className={styles.icon} />
            <span className={styles.settingItemText}>{content.theme}</span>
            <span>
              {currentTheme === 'light'
                ? content.lightTheme
                : content.darkTheme}
            </span>
          </div>
        </SettingItem>
        <SettingItem onClick={() => updateLanguage()}>
          <div className={styles.settingItemContent}>
            <Globe className={styles.icon} />
            <span className={styles.settingItemText}>{content.language}</span>
            <span>{content.currentLanguage}</span>
          </div>
        </SettingItem>
      </SettingsBlock>
    </div>
  );
};

export default Settings;
