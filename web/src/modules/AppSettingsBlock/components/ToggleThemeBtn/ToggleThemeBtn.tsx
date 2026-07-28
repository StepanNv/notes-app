import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import styles from './ToggleThemeBtn.module.scss';
import { Sun, Moon } from 'lucide-react';

const ToggleThemeBtn = () => {
  const setTheme = useAppSettingsStore((state) => state.setTheme);
  const theme = useAppSettingsStore((state) => state.theme);

  return (
    <button className={styles.toggleThemeBtn} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <Moon className={styles.toggleThemeBtnIcon} />
      ) : (
        <Sun className={styles.toggleThemeBtnIcon} />
      )}
    </button>
  );
};
export default ToggleThemeBtn;
