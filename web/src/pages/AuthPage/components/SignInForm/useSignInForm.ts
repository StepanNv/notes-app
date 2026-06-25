import { useForm } from 'react-hook-form';
import type { SignInDto } from '../../../../api/generated/data-contracts';
import { useSignInMutation } from './useSignInMutation';

export const useSignInForm = () => {
  const { register, handleSubmit } = useForm<SignInDto>();
  const signInMutation = useSignInMutation();

  const submit = handleSubmit((formData) => {
    signInMutation.mutate(formData);
  });

  return {
    register,
    submit,
  };
};
