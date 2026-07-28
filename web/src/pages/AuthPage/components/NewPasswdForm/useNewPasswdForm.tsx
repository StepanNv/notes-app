import { useForm } from 'react-hook-form';
import type { ConfirmPasswdResetDto } from '../../../../api/generated/data-contracts';
import { useNavigate } from 'react-router-dom';
import { useConfirmPasswdResetMutation } from './useConfirmPasswdResetMutation';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';

export const useNewPasswordForm = () => {
  const { register, handleSubmit } = useForm<ConfirmPasswdResetDto>();
  const confirmPasswdResetMutation = useConfirmPasswdResetMutation();
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const navigate = useNavigate();

  const submit = handleSubmit((formData) => {
    confirmPasswdResetMutation.mutate(
      {
        email: confirmationEmail,
        newPassword: formData.newPassword,
        confirmationCode: formData.confirmationCode,
      },
      {
        onSuccess: () => {
          navigate('/sign-in');
        },
      },
    );
  });

  return {
    register,
    submit,
  };
};
