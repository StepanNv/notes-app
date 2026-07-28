import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import { AppSettingsBlock } from '../../../../modules/AppSettingsBlock';
import LandingContent from '../LandingContent/LandingContent';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <>
      <NotAuthPagesHeader />
      <main className={styles.main}>
        <LandingContent />
        <AppSettingsBlock />
      </main>
    </>
  );
};

export default LandingPage;
