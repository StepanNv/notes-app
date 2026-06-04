import { EditorContent } from '@tiptap/react';
import styles from './NoteForm.module.scss';
import TiptapEditorToolbar from '../TiptapEditorToolbar/TiptapEditorToolbar';
import { useNoteEditor } from './useNoteEditor';
import { useNoteForm } from './useNoteForm';

const NoteForm = () => {
  const { register, handleSubmit, control, saveNote } = useNoteForm();
  const editor = useNoteEditor(control);

  return (
    <main className={styles.noteForm}>
      <form
        className={styles.noteFormContent}
        onSubmit={handleSubmit(saveNote)}
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
