import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
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
      <Form onSubmit={submit}>
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
      </Form>
      <FormCardFooter>
        <Link to="/account-recovery">Forgot password?</Link>
        <span>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default SignInForm;
