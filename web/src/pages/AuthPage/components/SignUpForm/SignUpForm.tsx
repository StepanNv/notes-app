import { useMutation } from '@tanstack/react-query';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignUpForm.module.scss';
import { authController } from '../../../../api/auth-controller';
import { useForm } from 'react-hook-form';
import type { RegisterDto } from '../../../../api/generated/data-contracts';
import { useAuthStore } from '../../../../stores/useAuthStore';
import type { AxiosError } from 'axios';

const SignUpForm = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const { register, handleSubmit } = useForm<RegisterDto>();

  const registerMutation = useMutation({
    mutationFn: (formData: RegisterDto) =>
      authController.authControllerRegister(formData),
    onSuccess: (data) => {
      setAccessToken(data.data.accessJwt);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error.response?.data?.message);
    },
  });

  const handleRegister = (formData: RegisterDto) => {
    registerMutation.mutate(formData);
  };

  return (
    <FormCard>
      <form
        className={styles.signUpForm}
        onSubmit={handleSubmit(handleRegister)} // handleSubmit передаст в handleRegister данные из формы сам под капотом
      >
        <FormInput
          type="email"
          placeholder="Email address"
          {...register('email', { required: true })}
        />
        <FormInput
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        <FormInput
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>Sign Up</SubmitFormBtn>
      </form>
    </FormCard>
  );
};
export default SignUpForm;
