import { useForm } from 'react-hook-form';
import { useConfirmPasswdResetMutation } from './useConfirmPasswdResetMutation';
import { useModalStore } from '../../../../stores/useModalStore';

type TChangePasswordForm = {
  newPassword: string;
  confirmationCode: string;
};

export const useChangePasswordForm = (
  email: string,
  onDone?: () => void,
) => {
  const { register, handleSubmit, reset } = useForm<TChangePasswordForm>();
  const confirmPasswdResetMutation = useConfirmPasswdResetMutation();
  const closeModal = useModalStore((state) => state.closeModal);

  const submit = handleSubmit((formData) => {
    confirmPasswdResetMutation.mutate(
      {
        email,
        newPassword: formData.newPassword,
        confirmationCode: formData.confirmationCode,
      },
      {
        onSuccess: () => {
          reset();
          onDone?.();
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
