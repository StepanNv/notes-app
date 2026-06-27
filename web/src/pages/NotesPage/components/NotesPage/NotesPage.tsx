import NotesPageHeader from '../NotesPageHeader/NotesPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import AddNoteBtn from '../AddNoteBtn/AddNoteBtn';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { EditorHeader } from '../../../../modules/EditorHeader';

const NotesPage = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedIds);
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
    </>
  );
};
export default NotesPage;
