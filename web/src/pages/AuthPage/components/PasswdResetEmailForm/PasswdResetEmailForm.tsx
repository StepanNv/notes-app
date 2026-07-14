import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link } from 'react-router-dom';
import { usePasswdResetForm } from './usePasswdResetForm';

const PasswdResetEmailForm = () => {
  const { register, submit } = usePasswdResetForm();

  return (
    <FormCard>
      <FormCardHeader
        title="Reset password"
        subtitle="Please enter your email to reset your password"
      />
      <Form onSubmit={submit}>
        <FormInput
          type="email"
          placeholder="Your email"
          {...register('email', { required: true })}
        />
        <SubmitFormBtn>Continue</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default PasswdResetEmailForm;
