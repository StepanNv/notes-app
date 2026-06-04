import TrashPageHeader from '../TrashPageHeader/TrashPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';

const TrashPage = () => {
  return (
    <>
      <TrashPageHeader />
      <InfiniteNotesList />
      <Sidebar />
    </>
  );
};
export default TrashPage;
