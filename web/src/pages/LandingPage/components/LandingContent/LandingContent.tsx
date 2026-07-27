import { Link } from 'react-router-dom';
import styles from './LandingContent.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Stay organized with Notes app',
    subtitle: 'Keep track of your tasks and ideas in one place',
    getStartedBtn: 'Get started',
  },
  ru: {
    title: 'Будьте организованными с приложением Notes app',
    subtitle: 'Отслеживайте свои задачи и идеи в одном месте',
    getStartedBtn: 'Начать',
  },
};

const LandingContent = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <div className={styles.landingContent}>
      <span className={styles.title}>{content.title}</span>
      <span className={styles.subtitle}>{content.subtitle}</span>
      <Link to={'/sign-up'} className={styles.button}>
        {content.getStartedBtn}
      </Link>
    </div>
  );
};

export default LandingContent;
