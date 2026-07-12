import { useForm } from 'react-hook-form';
import type { SignUpDto } from '../../../../api/generated/data-contracts';
import { useSignUpMutation } from './useSignUpMutation';
import { useNavigate } from 'react-router-dom';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';

export const useSignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpDto>();
  const signUpMutation = useSignUpMutation();
  const setConfirmationEmail = useConfirmationEmailStore(
    (state) => state.setConfirmationEmail,
  );
  const setTrueEnteredPassword = useConfirmationEmailStore(
    (state) => state.setTrueEnteredPassword,
  );
  const navigate = useNavigate();

  const submit = handleSubmit((formData) => {
    signUpMutation.mutate(formData, {
      onSuccess: () => {
        setConfirmationEmail(formData.email);
        setTrueEnteredPassword(formData.password);
        navigate('/sign-in/confirm-code');
      },
    });
  });

  return {
    register,
    submit,
  };
};
