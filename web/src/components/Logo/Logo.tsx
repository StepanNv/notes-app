import styles from './Logo.module.scss';
import LogoIcon from '/src/assets/icons/logo.svg?react';
import { useNavigate } from 'react-router-dom';

const Logo = ({ isAppNameVisible }: { isAppNameVisible: boolean }) => {
  const navigate = useNavigate();
  return (
    <button className={styles.logo} onClick={() => navigate('/')}>
      <LogoIcon />
      {isAppNameVisible && <div className={styles.appName}>Notes app</div>}
    </button>
  );
};
export default Logo;
