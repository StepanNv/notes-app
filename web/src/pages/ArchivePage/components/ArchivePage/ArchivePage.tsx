import ArchivePageHeader from '../ArchivePageHeader/ArchivePageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import styles from './ArchivePage.module.scss';

const ArchivePage = () => {
  return (
    <>
      <ArchivePageHeader />
      <main className={styles.main}>
        <InfiniteNotesList />
      </main>
      <Sidebar />
    </>
  );
};
export default ArchivePage;
