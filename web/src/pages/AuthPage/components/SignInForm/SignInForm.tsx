import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../../../stores/useAuthStore';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignInForm.module.scss';
import { useMutation } from '@tanstack/react-query';
import { authController } from '../../../../api/auth-controller';
import type { AxiosError } from 'axios';
import type { LoginDto } from '../../../../api/generated/data-contracts';

const SignInForm = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const { register, handleSubmit } = useForm<LoginDto>();

  const loginMutation = useMutation({
    mutationFn: (formData: LoginDto) =>
      authController.authControllerLogin(formData),
    onSuccess: (data) => {
      setAccessToken(data.data.accessJwt);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error.response?.data?.message);
    },  
  });

  const handleLogin = (formData: LoginDto) => {
    loginMutation.mutate(formData);
  };

  return (
    <FormCard>
      <form className={styles.signInForm} onSubmit={handleSubmit(handleLogin)}>
        <FormInput
          type="email"
          placeholder="Email address"
          {...register('email', { required: true })}
        />
        <FormInput
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>Sign In</SubmitFormBtn>
      </form>
    </FormCard>
  );
};
export default SignInForm;
