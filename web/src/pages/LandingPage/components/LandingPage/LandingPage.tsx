import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import LandingContent from '../LandingContent/LandingContent';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <>
      <NotAuthPagesHeader />
      <main className={styles.main}>
        <LandingContent />
      </main>
    </>
  );
};

export default LandingPage;
