import Header from '../../ui/Header/Header';
import Logo from '../Logo/Logo';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';
import { useAppSettingsStore } from '../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    signInBtn: 'Sign in',
    signUpBtn: 'Sign up',
  },
  ru: {
    signInBtn: 'Вход',
    signUpBtn: 'Регистрация',
  },
};

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
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.content}>
        <Logo isAppNameVisible={true} />
        <nav className={styles.authLinks}>
          <Link
            to="/sign-in"
            className={`${styles.link} ${selectedAuthMethod === 'sign-in' ? styles.opened : ''}`}
          >
            {content.signInBtn}
          </Link>
          <Link
            to="/sign-up"
            className={`${styles.link} ${selectedAuthMethod === 'sign-up' ? styles.opened : ''}`}
          >
            {content.signUpBtn}
          </Link>
        </nav>
      </div>
    </Header>
  );
};

export default NotAuthPagesHeader;
