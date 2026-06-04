import { useController, type Control } from 'react-hook-form';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from './NoteForm.module.scss';
import Placeholder from '@tiptap/extension-placeholder';

export type NoteFormValues = {
  title: string;
  text: string;
};

export const useNoteEditor = (control: Control<NoteFormValues>) => {
  const { field } = useController({ control, name: 'text' });

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({ placeholder: 'Note' }),
    ],
    content: field.value,
    onUpdate: ({ editor }) => {
      field.onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: styles.editor,
      },
    },
  });

  return editor;
};
