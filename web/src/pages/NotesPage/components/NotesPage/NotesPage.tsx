import NotesPageHeader from '../NotesPageHeader/NotesPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import AddNoteBtn from '../AddNoteBtn/AddNoteBtn';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { EditorHeader } from '../../../../modules/EditorHeader';
import SortModal from '../SortModal/SortModal';
import UpdateColorModal from '../../../../modules/UpdateColorModal/components/UpdateColorModal/UpdateColorModal';

const NotesPage = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  return (
    <>
      {selectedNotes.size > 0 ? (
        <EditorHeader currentPage="notes" />
      ) : (
        <NotesPageHeader />
      )}
      <InfiniteNotesList
        query={{ status: 'default', sort: 'custom', limit: 7 }}
      />
      <AddNoteBtn />
      <Sidebar />
      <SortModal />
      <UpdateColorModal />
    </>
  );
};
export default NotesPage;
