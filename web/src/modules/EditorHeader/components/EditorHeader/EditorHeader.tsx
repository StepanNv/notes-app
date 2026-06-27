import CrossBtn from '../../../../components/CrossBtn/CrossBtn';
import Header from '../../../../ui/Header/Header';
import PaletteBtn from '../PaletteBtn/PaletteBtn';
import styles from './EditorHeader.module.scss';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
// import UpNoteBtn from '../UpNoteBtn/UpNoteBtn';
// import DownNoteBtn from '../DownNoteBtn/DownNoteBtn';
import UpdateStatusDropdown from '../UpdateStatusDropdown/UpdateStatusDropdown';

const EditorHeader = ({
  currentPage,
}: {
  currentPage: 'notes' | 'archive' | 'trash';
}) => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedIds);
  const deselectAll = useNotesSelectionStore((state) => state.clear);

  return (
    <Header>
      <div className={styles.container}>
        <div className={styles.group}>
          <CrossBtn onClick={() => deselectAll()} />
          <div className={styles.selectedNotesCounter}>
            Selected: {selectedNotes.size}
          </div>
        </div>
        <div className={styles.group}>
          {/* <UpNoteBtn onClick={() => {}}/>
          <DownNoteBtn onClick={() => {}} /> */}
          {currentPage !== 'trash' && <PaletteBtn onClick={() => {}} />}
          <UpdateStatusDropdown currentPage={currentPage} />
        </div>
      </div>
    </Header>
  );
};
export default EditorHeader;
