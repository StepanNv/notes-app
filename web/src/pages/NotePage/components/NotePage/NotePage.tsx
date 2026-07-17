import styles from './NotePage.module.scss';
import NotePageHeader from '../NotePageHeader/NotePageHeader';
import NoteForm from '../NoteForm/NoteForm';

const NotePage = () => {
  return (
    <>
      <NotePageHeader />
      <main className={styles.main}>
        <NoteForm />
      </main>
    </>
  );
};
export default NotePage;
