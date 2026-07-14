import { useForm } from 'react-hook-form';
import { useVerifyEmailMutation } from './useVerifyEmailMutation';
import type { ConfirmEmailVerificationDto } from '../../../../api/generated/data-contracts';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';

export const useVerifyEmailForm = () => {
  const { register, handleSubmit } = useForm<ConfirmEmailVerificationDto>();
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const verifyEmailMutation = useVerifyEmailMutation();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const submit = handleSubmit((data) => {
    verifyEmailMutation.mutate(
      {
        email: confirmationEmail,
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
