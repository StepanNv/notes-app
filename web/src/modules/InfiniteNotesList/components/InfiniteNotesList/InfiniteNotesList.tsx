import { useState } from 'react';
import styles from './InfiniteNotesList.module.scss';
import NoNotesContent from '../NoNotesContent/NoNotesContent';

const InfiniteNotesList = () => {
  const [notes, setNotes] = useState<string[]>([]);
  return (
    <div className={styles.infiniteNotesList}>
      {notes.length > 0 ? (
        <div className={styles.notesList}>
          {notes.map((note) => (
            <div key={note} className={styles.note}>
              {note}
            </div>
          ))}
        </div>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
