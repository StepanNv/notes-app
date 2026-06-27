import ArchivePageHeader from '../ArchivePageHeader/ArchivePageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { EditorHeader } from '../../../../modules/EditorHeader';

const ArchivePage = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedIds);
  return (
    <>
      {selectedNotes.size > 0 ? <EditorHeader currentPage="archive" /> : <ArchivePageHeader />}
      <InfiniteNotesList
        query={{ status: 'archived', sort: 'custom', limit: 7 }}
      />
      <Sidebar />
    </>
  );
};
export default ArchivePage;
