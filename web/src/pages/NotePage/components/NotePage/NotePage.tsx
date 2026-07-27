import styles from './NotePage.module.scss';
import NotePageHeader from '../NotePageHeader/NotePageHeader';
import NoteForm from '../NoteForm/NoteForm';
import { useParams } from 'react-router-dom';
import { useGetNote } from '../../hooks/useGetNote';
import { NOTE_COLORS } from '../../../../consts/noteColors';

const NotePage = () => {
  const { id } = useParams();
  const { data } = useGetNote(id);

  return (
    <div
      className={styles.notePage}
      style={data && { backgroundColor: NOTE_COLORS[data?.note.colorKey] }}
    >
      <NotePageHeader />
      <main className={styles.main}>
        <NoteForm />
      </main>
    </div>
  );
};
export default NotePage;
