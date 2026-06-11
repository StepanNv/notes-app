import CrossBtn from '../../../../components/CrossBtn/CrossBtn';
import Header from '../../../../ui/Header/Header';
import ArrowDownBtn from '../ArrowDownBtn/ArrowDownBtn';
import ArrowUpBtn from '../ArrowUpBtn/ArrowUpBtn';
import PaletteBtn from '../PaletteBtn/PaletteBtn';
import styles from './EditorHeader.module.scss';
import MoreBtn from '../MoreBtn/MoreBtn';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';

const EditorHeader = () => {
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
          <ArrowUpBtn onClick={() => {}} />
          <ArrowDownBtn onClick={() => {}} />
          <PaletteBtn onClick={() => {}} />
          <MoreBtn onClick={() => {}} />
        </div>
      </div>
    </Header>
  );
};
export default EditorHeader;
