import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link } from 'react-router-dom';

const PassRecoveryNewPassForm = () => {
  return (
    <FormCard>
      <FormCardHeader
        title="Create New Password"
        subtitle="Please enter a strong password"
      />
      <Form onSubmit={() => {}}>
        <FormInput
          type="password"
          placeholder="New password"
          // {...register('password', { required: true })}
        />
        <FormInput
          type="password"
          placeholder="Confirm password"
          // {...register('confirmPassword', { required: true })}
        />
      </Form>
      <FormCardFooter>
        <SubmitFormBtn>Update password</SubmitFormBtn>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default PassRecoveryNewPassForm;
