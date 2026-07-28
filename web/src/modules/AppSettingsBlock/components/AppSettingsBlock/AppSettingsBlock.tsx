import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';
import styles from './AppSettingsBlock.module.scss';

const AppSettingsBlock = () => {
  return (
    <div className={styles.appSettingsBlock}>
      <LanguageSwitcher />
      <ToggleThemeBtn />
    </div>
  );
};
export default AppSettingsBlock;
