import styles from './NoNotesContent.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const NoNotesContent = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <div className={styles.noNotesContent}>
      <p>
        {language === 'en' ? 'No notes here yet' : 'Здесь пока нет заметок'}
      </p>
    </div>
  );
};

export default NoNotesContent;
