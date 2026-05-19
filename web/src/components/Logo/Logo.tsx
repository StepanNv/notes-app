import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import LogoIcon from '/src/assets/icons/logo.svg?react';

const Logo = ({ isAppNameVisible }: { isAppNameVisible: boolean }) => {
  return (
    <Link className={styles.logo} to={'/'}>
      <LogoIcon />
      {isAppNameVisible && <div className={styles.appName}>Notes app</div>}
    </Link>
  );
};
export default Logo;
