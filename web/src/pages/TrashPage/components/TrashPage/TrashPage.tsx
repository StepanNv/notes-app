import TrashPageHeader from '../TrashPageHeader/TrashPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { EditorHeader } from '../../../../modules/EditorHeader';

const TrashPage = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedIds);
  return (
    <>
      {selectedNotes.size > 0 ? <EditorHeader /> : <TrashPageHeader />}
      <InfiniteNotesList
        query={{ status: 'trashed', sort: 'custom', limit: 7 }}
      />
      <Sidebar />
    </>
  );
};
export default TrashPage;
