import SettingsBlock from '../../ui/SettingsBlock/SettingsBlock';
import SettingItem from '../../ui/SettingItem/SettingItem';
import styles from './Settings.module.scss';
import { ChevronRight, Globe, Lock, Sun, UserCircle } from 'lucide-react';
import { useModalStore } from '../../../../stores/useModalStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const Settings = () => {
  const openModal = useModalStore((state) => state.openModal);
  const language = useAppSettingsStore((state) => state.language);

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>
        {language === 'en' ? 'Settings' : 'Настройки'}
      </h2>
      <SettingsBlock title={language === 'en' ? 'Account' : 'Аккаунт'}>
        <SettingItem
          onClick={(e) => {
            e.stopPropagation();
            openModal('changeUsername');
          }}
        >
          <div className={styles.settingItemContent}>
            <UserCircle className={styles.icon} />
            <span className={styles.settingItemText}>
              {language === 'en'
                ? 'Change username'
                : 'Сменить имя пользователя'}
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
              {language === 'en' ? 'Change password' : 'Сменить пароль'}
            </span>
            <ChevronRight />
          </div>
        </SettingItem>
      </SettingsBlock>
      <SettingsBlock title={language === 'en' ? 'App' : 'Приложение'}>
        <SettingItem>
          <div className={styles.settingItemContent}>
            <Sun className={styles.icon} />
            <span className={styles.settingItemText}>
              {language === 'en' ? 'Theme' : 'Тема'}
            </span>
            <ChevronRight />
          </div>
        </SettingItem>
        <SettingItem>
          <div className={styles.settingItemContent}>
            <Globe className={styles.icon} />
            <span className={styles.settingItemText}>
              {language === 'en' ? 'Language' : 'Язык'}
            </span>
            <ChevronRight />
          </div>
        </SettingItem>
      </SettingsBlock>
    </div>
  );
};

export default Settings;
