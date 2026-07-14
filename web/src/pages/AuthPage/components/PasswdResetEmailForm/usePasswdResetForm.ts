import { useForm } from 'react-hook-form';
import type { PasswdResetDto } from '../../../../api/generated/data-contracts';
import { usePasswdResetMutation } from './usePasswdResetMutation';
import { useNavigate } from 'react-router-dom';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';

export const usePasswdResetForm = () => {
  const { register, handleSubmit } = useForm<PasswdResetDto>();
  const passwdResetMutation = usePasswdResetMutation();
  const navigate = useNavigate();
  const setConfirmationEmail = useConfirmationEmailStore(
    (state) => state.setConfirmationEmail,
  );

  const submit = handleSubmit((formData) => {
    passwdResetMutation.mutate(formData, {
      onSuccess: () => {
        setConfirmationEmail(formData.email);
        navigate('/sign-in/new-password');
      },
    });
  });

  return {
    register,
    submit,
  };
};
