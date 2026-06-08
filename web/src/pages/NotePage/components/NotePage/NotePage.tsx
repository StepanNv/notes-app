import NotePageHeader from '../NotePageHeader/NotePageHeader';
import NoteForm from '../NoteForm/NoteForm';
import type { NoteDto } from '../../../../api/generated/data-contracts';

const NotePage = ({ noteStatus }: { noteStatus: NoteDto['status'] }) => {
  return (
    <>
      <NotePageHeader />
      <NoteForm noteStatus={noteStatus} />
    </>
  );
};
export default NotePage;
