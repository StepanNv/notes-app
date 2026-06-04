import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

export const useNoteForm = () => {
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

  const saveNote = (formData: z.infer<typeof formSchema>) => {
    console.log(formData);
  };

  return { register, handleSubmit, control, saveNote };
};
