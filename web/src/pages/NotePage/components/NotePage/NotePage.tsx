import styles from './NotePage.module.scss';
import NotePageHeader from '../NotePageHeader/NotePageHeader';
import NoteForm from '../NoteForm/NoteForm';
import { useParams } from 'react-router-dom';
import { useGetNote } from '../../hooks/useGetNote';
import { NOTE_COLORS } from '../../../../consts/noteColors';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    loadingText: 'Loading...',
    errorText: 'Failed to retrieve note',
  },
  ru: {
    loadingText: 'Загрузка...',
    errorText: 'Не удалось получить заметку',
  },
};

const NotePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetNote(id);
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const theme = useAppSettingsStore((state) => state.theme);

  if (isLoading) {
    return (
      <div className={styles.notePage}>
        <NotePageHeader />
        <main className={styles.main}>{content.loadingText}</main>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <>
        <NotePageHeader />
        <main className={styles.main}>{content.errorText}</main>
      </>
    );
  }

  return (
    <div
      className={styles.notePage}
      style={{
        backgroundColor: NOTE_COLORS[data.note.colorKey],
        color:
          theme === 'light' && data.note.colorKey !== 'FIRST' ? 'white' : '',
      }}
    >
      <NotePageHeader />
      <main className={styles.main}>
        <NoteForm />
      </main>
    </div>
  );
};
export default NotePage;
