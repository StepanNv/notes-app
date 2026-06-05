import { EditorContent } from '@tiptap/react';
import styles from './NoteForm.module.scss';
import TiptapEditorToolbar from '../TiptapEditorToolbar/TiptapEditorToolbar';
import { useNoteEditor } from './useNoteEditor';
import { useNoteForm } from './useNoteForm';
import { useParams } from 'react-router-dom';

const NoteForm = () => {
  const { id } = useParams();
  const { register, control, saveNote } = useNoteForm(id);
  const editor = useNoteEditor(control);

  return (
    <main className={styles.noteForm}>
      <form
        id="note-form"
        className={styles.noteFormContent}
        onSubmit={saveNote}
      >
        <div className={styles.scrollArea}>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Title"
            {...register('title')}
            autoFocus
          />
          <EditorContent className={styles.editorWrapper} editor={editor} />
        </div>
        <TiptapEditorToolbar editor={editor} />
      </form>
    </main>
  );
};

export default NoteForm;
