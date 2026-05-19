import TrashPageHeader from '../TrashPageHeader/TrashPageHeader';
import styles from './TrashPage.module.scss';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';

const TrashPage = () => {
  return (
    <>
      <TrashPageHeader />
      <main className={styles.main}></main>
      <Sidebar />
    </>
  );
};
export default TrashPage;
