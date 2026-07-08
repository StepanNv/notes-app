import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';

const PassRecoveryConfirmCodeForm = () => {
  return (
    <FormCard>
      <FormCardHeader
        title="Check your email"
        subtitle="We sent a 6-digit verification code to [email]"
      />
      <Form onSubmit={() => {}}>
        <FormInput
          type="text"
          placeholder="Code"
          // {...register('code', { required: true })}
        />
        <SubmitFormBtn>Confirm</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>Didn't receive the code? Resend code</span>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default PassRecoveryConfirmCodeForm;
