import TrashPageHeader from '../TrashPageHeader/TrashPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';

const TrashPage = () => {
  return (
    <>
      <TrashPageHeader />
      <InfiniteNotesList
        query={{ status: 'trashed', sort: 'custom', limit: 7 }}
      />
      <Sidebar />
    </>
  );
};
export default TrashPage;
