import { Link } from 'react-router-dom';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignUpForm.module.scss';
import { useSignUpForm } from './useSignUpForm';

const SignUpForm = () => {
  const { register, submit } = useSignUpForm();

  return (
    <FormCard>
      <FormCardHeader
        title="Create an account"
        subtitle="Sign up to get started"
      />
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
      <FormCardFooter>
        <span>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default SignUpForm;
