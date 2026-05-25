import styles from './NoteItem.module.scss';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import type { NoteDto } from '../../../../api/generated/data-contracts';

const NoteItem = ({ title, text }: Pick<NoteDto, 'title' | 'text'>) => {
  return (
    <div
      className={styles.noteItem}
      // onClick={openNote}
    >
      <div className={styles.noteContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.textt}>
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
