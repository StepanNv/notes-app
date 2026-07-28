import styles from './NoNotesContent.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    noNotesText: 'No notes here yet',
  },
  ru: {
    noNotesText: 'Здесь пока нет заметок',
  },
};

const NoNotesContent = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <div className={styles.noNotesContent}>
      <p>{content.noNotesText}</p>
    </div>
  );
};

export default NoNotesContent;
