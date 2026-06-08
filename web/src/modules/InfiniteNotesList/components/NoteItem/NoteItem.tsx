import styles from './NoteItem.module.scss';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import type { NoteDto } from '../../../../api/generated/data-contracts';
import { useNavigate } from 'react-router-dom';

const NoteItem = ({
  id,
  title,
  text,
  status,
}: Pick<NoteDto, 'id' | 'title' | 'text' | 'status'>) => {
  const navigate = useNavigate();

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
    <div className={styles.noteItem} onClick={() => openNote(status)}>
      <div className={styles.noteContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>
          {parse(DOMPurify.sanitize(text || ''))}
        </div>
      </div>

      <div
        className={styles.selectBtn} // onClick={addEditableNoteHandler}
      >
        {/* <SelectIcon /> */}
      </div>
    </div>
  );
};
export default NoteItem;
