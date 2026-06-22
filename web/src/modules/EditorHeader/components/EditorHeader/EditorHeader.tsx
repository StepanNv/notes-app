import CrossBtn from '../../../../components/CrossBtn/CrossBtn';
import Header from '../../../../ui/Header/Header';
import PaletteBtn from '../PaletteBtn/PaletteBtn';
import styles from './EditorHeader.module.scss';
import MoreBtn from '../MoreBtn/MoreBtn';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import UpNoteBtn from '../UpNoteBtn/UpNoteBtn';
import DownNoteBtn from '../DownNoteBtn/DownNoteBtn';
import { useNoteMovement } from './useNoteMovement';

const EditorHeader = () => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedIds);
  const deselectAll = useNotesSelectionStore((state) => state.clear);
  const { canMoveUp, canMoveDown, moveUp, moveDown } = useNoteMovement();

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
          <UpNoteBtn onClick={moveUp} disabled={!canMoveUp} />
          <DownNoteBtn onClick={moveDown} disabled={!canMoveDown} />
          <PaletteBtn onClick={() => {}} />
          <MoreBtn onClick={() => {}} />
        </div>
      </div>
    </Header>
  );
};
export default EditorHeader;
