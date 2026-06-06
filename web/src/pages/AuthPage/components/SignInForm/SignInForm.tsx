import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignInForm.module.scss';
import { useSignInForm } from './useSignInForm';

const SignInForm = () => {
  const { register, submit } = useSignInForm();

  return (
    <FormCard>
      <form className={styles.signInForm} onSubmit={submit}>
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
