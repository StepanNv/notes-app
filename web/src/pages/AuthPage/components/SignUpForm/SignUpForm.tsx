import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignUpForm.module.scss';
import { useSignUpForm } from './useSignUpForm';

const SignUpForm = () => {
  const { register, submit } = useSignUpForm();

  return (
    <FormCard>
      <form className={styles.signUpForm} onSubmit={submit}>
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
