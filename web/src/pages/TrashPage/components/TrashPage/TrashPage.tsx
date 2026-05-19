import TrashPageHeader from '../TrashPageHeader/TrashPageHeader';
import styles from './TrashPage.module.scss';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';

const TrashPage = () => {
  return (
    <>
      <TrashPageHeader />
      <main className={styles.main}>
        <InfiniteNotesList />
      </main>
      <Sidebar />
    </>
  );
};
export default TrashPage;
