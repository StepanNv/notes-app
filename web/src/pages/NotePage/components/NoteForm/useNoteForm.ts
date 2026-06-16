import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { addNote } from '../../api/add-note';
import { updateContent } from '../../api/update-content';
import { useNavigate } from 'react-router-dom';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox/stores/useErrorsStore';

const formSchema = z.object({
  title: z
    .string()
    .max(100, { message: 'Title cannot be longer than 100 characters' }),
  text: z
    .string()
    .max(10000, { message: 'Text cannot be longer than 10000 characters' }),
});

export const useNoteForm = (noteId?: string) => {
  const navigate = useNavigate();
  const addError = useErrorsStore((state) => state.addError);

  const { register, handleSubmit, control, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      text: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      if (noteId) {
        await updateContent({
          noteId,
          updatedTitle: formData.title,
          updatedText: formData.text,
        });
      } else {
        await addNote(formData);
      }
      navigate('/notes');
    } catch (error) {
      addError('Something went wrong. Please try again later.');
      navigate('/notes');
    }
  };

  const saveNote = handleSubmit(onSubmit);

  return { register, control, saveNote, reset };
};
