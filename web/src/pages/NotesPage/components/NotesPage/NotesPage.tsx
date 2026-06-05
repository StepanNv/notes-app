import NotesPageHeader from '../NotesPageHeader/NotesPageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import AddNoteBtn from '../AddNoteBtn/AddNoteBtn';

const NotesPage = () => {
  return (
    <>
      <NotesPageHeader />
      <InfiniteNotesList />
      <AddNoteBtn />
      <Sidebar />
    </>
  );
};
export default NotesPage;
