import { Link } from 'react-router-dom';
import styles from './LandingContent.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const LandingContent = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <div className={styles.landingContent}>
      <span className={styles.title}>
        {language === 'en'
          ? 'Stay organized with Notes app'
          : 'Будьте организованными с приложением Notes app'}
      </span>
      <span className={styles.subtitle}>
        {language === 'en'
          ? 'Keep track of your tasks and ideas in one place'
          : 'Отслеживайте свои задачи и идеи в одном месте'}
      </span>
      <Link to={'/sign-up'} className={styles.button}>
        {language === 'en' ? 'Get started' : 'Начать'}
      </Link>
    </div>
  );
};

export default LandingContent;
