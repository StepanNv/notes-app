import Header from '../../ui/Header/Header';
import Logo from '../Logo/Logo';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';
import { useAppSettingsStore } from '../../stores/useAppSettingsStore';

const NotAuthPagesHeader = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod?:
    | 'sign-in'
    | 'sign-up'
    | 'new-passwd'
    | 'reset-passwd'
    | 'verify-email';
}) => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.content}>
        <Logo isAppNameVisible={true} />
        <nav className={styles.authLinks}>
          <Link
            to="/sign-in"
            className={`${styles.link} ${selectedAuthMethod === 'sign-in' ? styles.opened : ''}`}
          >
            {language === 'en' ? 'Sign in' : 'Вход'}
          </Link>
          <Link
            to="/sign-up"
            className={`${styles.link} ${selectedAuthMethod === 'sign-up' ? styles.opened : ''}`}
          >
            {language === 'en' ? 'Sign up' : 'Регистрация'}
          </Link>
        </nav>
      </div>
    </Header>
  );
};

export default NotAuthPagesHeader;
