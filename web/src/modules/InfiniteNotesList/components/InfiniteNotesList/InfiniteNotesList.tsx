import { useState } from 'react';
import styles from './InfiniteNotesList.module.scss';
import NoNotesContent from '../NoNotesContent/NoNotesContent';
import NoteItem from '../NoteItem/NoteItem';
import type { NoteDto } from '../../../../api/generated/data-contracts';

const InfiniteNotesList = () => {
  const [notes, setNotes] = useState<Pick<NoteDto, 'id' | 'title' | 'text'>[]>(
    [],
  );
  return (
    <div className={styles.infiniteNotesList}>
      {notes.length > 0 ? (
        <div className={styles.notesList}>
          {notes.map((note) => (
            <NoteItem key={note.id} title={note.title} text={note.text} />
          ))}
        </div>
      ) : (
        <NoNotesContent />
      )}
    </div>
  );
};
export default InfiniteNotesList;
