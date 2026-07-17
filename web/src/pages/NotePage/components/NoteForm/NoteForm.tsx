import { EditorContent } from '@tiptap/react';
import styles from './NoteForm.module.scss';
import TiptapEditorToolbar from '../TiptapEditorToolbar/TiptapEditorToolbar';
import { useNoteEditor } from './useNoteEditor';
import { useNoteForm } from './useNoteForm';
import { useParams } from 'react-router-dom';
import { useGetNote } from './useGetNote';
import { useEffect } from 'react';

const NoteForm = () => {
  const { id } = useParams();
  const { register, control, saveNote, reset } = useNoteForm(id);
  const editor = useNoteEditor(control);
  const { data, isLoading, isError, error } = useGetNote(id);

  useEffect(() => {
    if (data) {
      reset({
        title: data.note.title || '',
        text: data.note.text || '',
      });
    }
  }, [data, reset]);

  return (
    <div className={styles.noteForm}>
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
    </div>
  );
};

export default NoteForm;
