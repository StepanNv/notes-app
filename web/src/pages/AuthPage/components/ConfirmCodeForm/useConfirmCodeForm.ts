import { useForm } from 'react-hook-form';
import { useConfirmCodeMutation } from './useConfirmCodeMutation';
import type { ConfirmationDto } from '../../../../api/generated/data-contracts';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';

export const useConfirmCodeForm = () => {
  const { register, handleSubmit } = useForm<ConfirmationDto>();
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const confirmCodeMutation = useConfirmCodeMutation();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const submit = handleSubmit((data) => {
    confirmCodeMutation.mutate(
      {
        confirmationEmail: confirmationEmail,
        confirmationCode: data.confirmationCode,
      },
      {
        onSuccess: (data) => {
          setAccessToken(data.data.accessToken);
        },
      },
    );
  });

  return {
    register,
    submit,
  };
};
