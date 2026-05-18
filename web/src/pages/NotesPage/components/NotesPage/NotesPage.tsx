import styles from './NotesPage.module.scss';
import NotesPageHeader from '../NotesPageHeader/NotesPageHeader';

const NotesPage = () => {
  return (
    <>
      <NotesPageHeader />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>NotesPage</h1>
        </div>
      </main>
    </>
  );
};
export default NotesPage;
