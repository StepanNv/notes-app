import { Link } from 'react-router-dom';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignInForm.module.scss';
import { useSignInForm } from './useSignInForm';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';

const SignInForm = () => {
  const { register, submit } = useSignInForm();

  return (
    <FormCard>
      <FormCardHeader
        title="Welcome back!"
        subtitle="Sign in to your account"
      />
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
      <FormCardFooter>
        <Link to="/account-recovery" className={styles.accountRecoveryLink}>
          Forgot password?
        </Link>
        <span>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default SignInForm;
