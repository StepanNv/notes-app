import styles from './ArchivePage.module.scss';
import ArchivePageHeader from '../ArchivePageHeader/ArchivePageHeader';
import Sidebar from '../../../../modules/Sidebar/components/Sidebar/Sidebar';
import InfiniteNotesList from '../../../../modules/InfiniteNotesList/components/InfiniteNotesList/InfiniteNotesList';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { EditorHeader } from '../../../../modules/EditorHeader';
import UpdateColorModal from '../../../../modules/UpdateColorModal/components/UpdateColorModal/UpdateColorModal';

const ArchivePage = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  return (
    <>
      {selectedNotes.size > 0 ? (
        <EditorHeader currentPage="archive" />
      ) : (
        <ArchivePageHeader />
      )}
      <main className={styles.main}>
        <InfiniteNotesList
          query={{ status: 'archived', sort: 'custom', limit: 7 }}
        />
      </main>
      <Sidebar />
      <UpdateColorModal />
    </>
  );
};
export default ArchivePage;
