import { useForm } from 'react-hook-form';
import { useUpdateMeMutation } from './useUpdateMeMutation';
import { useModalStore } from '../../../../stores/useModalStore';

type TChangeUsernameForm = {
  username: string;
};

export const useChangeUsernameForm = (currentUsername?: string) => {
  const { register, handleSubmit, reset } = useForm<TChangeUsernameForm>({
    values: { username: currentUsername ?? '' },
  });
  const updateMeMutation = useUpdateMeMutation();
  const closeModal = useModalStore((state) => state.closeModal);

  const submit = handleSubmit((formData) => {
    updateMeMutation.mutate(
      { username: formData.username },
      {
        onSuccess: () => {
          reset({ username: formData.username });
          closeModal();
        },
      },
    );
  });

  return {
    register,
    submit,
  };
};
