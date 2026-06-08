import ArchivePageHeader from '../ArchivePageHeader/ArchivePageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';

const ArchivePage = () => {
  return (
    <>
      <ArchivePageHeader />
      <InfiniteNotesList query={{ status: 'archived', sort: 'custom', limit: 7 }} />
      <Sidebar />
    </>
  );
};
export default ArchivePage;
