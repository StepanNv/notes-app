import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import styles from './ToggleThemeBtn.module.scss';
import { Sun, Moon } from 'lucide-react';

const ToggleThemeBtn = () => {
  const toggleTheme = useAppSettingsStore((state) => state.toggleTheme);
  const theme = useAppSettingsStore((state) => state.theme);

  return (
    <button className={styles.toggleThemeBtn} onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon className={styles.toggleThemeBtnIcon} />
      ) : (
        <Sun className={styles.toggleThemeBtnIcon} />
      )}
    </button>
  );
};
export default ToggleThemeBtn;
