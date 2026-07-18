import styles from './SettingsPage.module.scss';
import SettingsPageHeader from '../SettingsPageHeader/SettingsPageHeader';
import Settings from '../Settings/Settings';
import ChangeUsernameModal from '../ChangeUsernameModal/ChangeUsernameModal';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';

const SettingsPage = () => {
  return (
    <>
      <SettingsPageHeader />
      <main className={styles.main}>
        <Settings />
      </main>
      <ChangeUsernameModal />
      <ChangePasswordModal />
    </>
  );
};
export default SettingsPage;
