import styles from './NoteItem.module.scss';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import type { NoteDto } from '../../../../api/generated/data-contracts';
import { useNavigate } from 'react-router-dom';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import SelectNoteBtn from '../SelectNoteBtn/SelectNoteBtn';

type NoteItemProps = {
  id: NoteDto['id'];
  title: NoteDto['title'];
  text: NoteDto['text'];
  status: NoteDto['status'];
  isSelected: boolean;
};

const NoteItem = ({ id, title, text, status, isSelected }: NoteItemProps) => {
  const navigate = useNavigate();
  const toggleNoteSelection = useNotesSelectionStore((state) => state.toggle);

  const openNote = (status: string) => {
    if (status === 'default') {
      navigate(`/notes/${id}`);
    } else if (status === 'archived') {
      navigate(`/archive/${id}`);
    } else if (status === 'trashed') {
      navigate(`/trash/${id}`);
    }
  };

  return (
    <div
      className={`${styles.noteItem} ${isSelected ? styles.selected : ''}`}
      onClick={() => openNote(status)}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>
          {parse(DOMPurify.sanitize(text || ''))}
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <SelectNoteBtn onClick={() => toggleNoteSelection(id)} />
      </div>
    </div>
  );
};
export default NoteItem;
