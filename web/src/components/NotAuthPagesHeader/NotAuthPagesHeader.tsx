import Header from '../../ui/Header/Header';
import Logo from '../Logo/Logo';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';

const NotAuthPagesHeader = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod?: 'sign-in' | 'sign-up';
}) => {
  return (
    <Header>
      <div className={styles.content}>
        <Logo isAppNameVisible={true} />
        <nav className={styles.authLinks}>
          <Link
            to="/sign-in"
            className={`${styles.link} ${selectedAuthMethod === 'sign-in' ? styles.opened : ''}`}
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className={`${styles.link} ${selectedAuthMethod === 'sign-up' ? styles.opened : ''}`}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </Header>
  );
};
export default NotAuthPagesHeader;
