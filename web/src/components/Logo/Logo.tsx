import styles from './Logo.module.scss';
import LogoIcon from '/src/assets/icons/logo.svg?react';

const Logo = ({ isAppNameVisible }: { isAppNameVisible: boolean }) => {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      {isAppNameVisible && <div className={styles.appName}>Notes app</div>}
    </div>
  );
};
export default Logo;
