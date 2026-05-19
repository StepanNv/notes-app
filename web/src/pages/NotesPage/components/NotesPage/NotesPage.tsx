import styles from './NotesPage.module.scss';
import NotesPageHeader from '../NotesPageHeader/NotesPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';

const NotesPage = () => {
  return (
    <>
      <NotesPageHeader />
      <main className={styles.main}>
        <InfiniteNotesList />
      </main>
      <Sidebar />
    </>
  );
};
export default NotesPage;
