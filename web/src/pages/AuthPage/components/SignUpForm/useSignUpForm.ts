import { useForm } from 'react-hook-form';
import type { SignUpDto } from '../../../../api/generated/data-contracts';
import { useSignUpMutation } from './useSignUpMutation';

export const useSignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpDto>();
  const signUpMutation = useSignUpMutation();

  const submit = handleSubmit((formData) => {
    signUpMutation.mutate(formData);
  });

  return {
    register,
    submit,
  };
};
