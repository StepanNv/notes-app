import styles from './NoteItem.module.scss';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import type { NoteDto } from '../../../../api/generated/data-contracts';
import { useNavigate } from 'react-router-dom';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import SelectNoteBtn from '../SelectNoteBtn/SelectNoteBtn';
import { NOTE_COLORS } from '../../../../consts/noteColors';

type NoteItemProps = {
  id: NoteDto['id'];
  title: NoteDto['title'];
  text: NoteDto['text'];
  status: NoteDto['status'];
  colorKey: NoteDto['colorKey'];
  isSelected: boolean;
};

const NoteItem = ({
  id,
  title,
  text,
  status,
  isSelected,
  colorKey,
}: NoteItemProps) => {
  const navigate = useNavigate();
  const addNoteSelection = useNotesSelectionStore((state) => state.add);
  const removeNoteSelection = useNotesSelectionStore((state) => state.remove);

  const openNote = (status: string) => {
    if (status === 'default') {
      navigate(`/notes/${id}`);
    } else if (status === 'archived') {
      navigate(`/archive/${id}`);
    } else if (status === 'trashed') {
      navigate(`/trash/${id}`);
    }
  };

  const toggleNoteSelection = () => {
    if (isSelected) {
      removeNoteSelection(id);
    } else {
      addNoteSelection({ id, colorKey });
    }
  };

  return (
    <li
      className={`${styles.noteItem} ${isSelected ? styles.selected : ''} ${colorKey !== 'FIRST' ? styles.colorable : ''}`}
      onClick={() => openNote(status)}
      style={{ backgroundColor: NOTE_COLORS[colorKey] }}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>
          {parse(DOMPurify.sanitize(text || ''))}
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <SelectNoteBtn onClick={toggleNoteSelection} />
      </div>
    </li>
  );
};
export default NoteItem;
