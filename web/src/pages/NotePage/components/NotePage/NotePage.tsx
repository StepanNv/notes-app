import styles from './NotePage.module.scss';
import NotePageHeader from '../NotePageHeader/NotePageHeader';
import NoteForm from '../NoteForm/NoteForm';
import { useParams } from 'react-router-dom';
import { useGetNote } from '../../hooks/useGetNote';
import { NOTE_COLORS } from '../../../../consts/noteColors';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import type { NoteDto } from '../../../../api/generated/data-contracts';

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

const isNoteColorLight = (
  noteData: NoteDto | undefined,
  theme: 'light' | 'dark',
  isNew: boolean,
) => {
  if (theme === 'light') {
    if (isNew || noteData?.colorKey === 'FIRST') return true;
  } else {
    return false;
  }
};

const NotePage = ({ isNew }: { isNew: boolean }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetNote(id);
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const theme = useAppSettingsStore((state) => state.theme);

  return (
    <div
      className={styles.notePage}
      style={{
        backgroundColor: data && NOTE_COLORS[data.note.colorKey],
        color: isNoteColorLight(data?.note, theme, isNew) ? '' : 'white',
      }}
    >
      <NotePageHeader />
      <main className={styles.main}>
        {isLoading && (
          <div className={styles.content}>{content.loadingText}</div>
        )}
        {isError && <div className={styles.content}>{content.errorText}</div>}
        <NoteForm />
      </main>
    </div>
  );
};
export default NotePage;
