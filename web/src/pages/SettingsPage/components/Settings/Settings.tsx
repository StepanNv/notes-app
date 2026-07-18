import SettingsBlock from '../../ui/SettingsBlock/SettingsBlock';
import SettingItem from '../../ui/SettingItem/SettingItem';
import styles from './Settings.module.scss';
import { ChevronRight, Globe, Lock, Sun, UserCircle } from 'lucide-react';
import { useModalStore } from '../../../../stores/useModalStore';

const Settings = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>Settings</h2>
      <SettingsBlock title="Account">
        <SettingItem
          onClick={(e) => {
            e.stopPropagation();
            openModal('changeUsername');
          }}
        >
          <div className={styles.settingItemContent}>
            <UserCircle className={styles.icon} />
            <span className={styles.settingItemText}>Change username</span>
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
            <span className={styles.settingItemText}>Change password</span>
            <ChevronRight />
          </div>
        </SettingItem>
      </SettingsBlock>
      <SettingsBlock title="App">
        <SettingItem>
          <div className={styles.settingItemContent}>
            <Sun className={styles.icon} />
            <span className={styles.settingItemText}>Theme</span>
            <ChevronRight />
          </div>
        </SettingItem>
        <SettingItem>
          <div className={styles.settingItemContent}>
            <Globe className={styles.icon} />
            <span className={styles.settingItemText}>Language</span>
            <ChevronRight />
          </div>
        </SettingItem>
      </SettingsBlock>
    </div>
  );
};
export default Settings;
