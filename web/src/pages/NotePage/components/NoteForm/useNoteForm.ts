import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { addNote } from '../../api/add-note';
import { updateContent } from '../../api/update-content';

export const useNoteForm = (noteId?: string) => {
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

  const saveNote = handleSubmit((formData: z.infer<typeof formSchema>) => {
    if (noteId) {
      updateContent({
        noteId,
        updatedTitle: formData.title,
        updatedText: formData.text,
      });
    } else {
      addNote(formData);
    }
  });

  return { register, control, saveNote };
};
