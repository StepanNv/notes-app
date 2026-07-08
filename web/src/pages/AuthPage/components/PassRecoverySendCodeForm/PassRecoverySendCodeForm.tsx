import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import { Link } from 'react-router-dom';

const PassRecoverySendCodeForm = () => {
  // const { register, submit } = usePassRecoverySendCodeForm();
  return (
    <FormCard>
      <FormCardHeader
        title="Password Recovery"
        subtitle="Enter your email to receive a reset code"
      />
      <Form onSubmit={() => {}}>
        <FormInput
          type="email"
          placeholder="Email address"
          // {...register('email', { required: true })}
        />
        <SubmitFormBtn>Send Code</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default PassRecoverySendCodeForm;
