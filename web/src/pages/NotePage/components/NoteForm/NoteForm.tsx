import { useForm } from 'react-hook-form';
import { EditorContent } from '@tiptap/react';
import styles from './NoteForm.module.scss';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TiptapEditorToolbar from '../TiptapEditorToolbar/TiptapEditorToolbar';
import { useNoteEditor } from './useNoteEditor';

const NoteForm = () => {
  const formSchema = z.object({
    title: z
      .string()
      .max(100, { message: 'Title cannot be longer than 100 characters' }),
    text: z
      .string()
      .max(10000, { message: 'Text cannot be longer than 10000 characters' }),
  });

  const { register, handleSubmit, control } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const saveNote = (formData: z.infer<typeof formSchema>) => {};

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
