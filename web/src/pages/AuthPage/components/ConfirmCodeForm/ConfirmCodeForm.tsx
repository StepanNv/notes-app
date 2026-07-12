import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { useConfirmCodeForm } from './useConfirmCodeForm';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useResendCodeMutation } from './useResendCodeMutation';
import ConfirmCodeInput from '../ConfirmCodeInput/ConfirmCodeInput';

const ConfirmCodeForm = () => {
  const { register, submit } = useConfirmCodeForm();
  const confimationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const trueEnteredPassword = useConfirmationEmailStore(
    (state) => state.trueEnteredPassword,
  );
  const navigate = useNavigate();
  const resendCodeMutation = useResendCodeMutation();

  useEffect(() => {
    if (confimationEmail === '' || trueEnteredPassword === '') {
      navigate('/sign-in');
    }
  }, [confimationEmail, trueEnteredPassword, navigate]);

  const handleResendCode = () => {
    resendCodeMutation.mutate({
      email: confimationEmail,
      password: trueEnteredPassword,
    });
  };

  return (
    <FormCard>
      <FormCardHeader
        title="Check your email"
        subtitle={`We sent a 6-digit verification code to ${confimationEmail}`}
      />
      <Form onSubmit={submit}>
        <ConfirmCodeInput
          register={register}
          handleResendCode={handleResendCode}
        />
        <SubmitFormBtn>Confirm</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default ConfirmCodeForm;
