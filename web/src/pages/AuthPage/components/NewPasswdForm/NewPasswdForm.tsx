import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import ConfirmCodeInput from '../ConfirmCodeInput/ConfirmCodeInput';
import { useResendCodeMutation } from './useResendCodeMutation';
import { useNewPasswordForm } from './useNewPasswdForm';

const NewPasswdForm = () => {
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const navigate = useNavigate();
  const resendCodeMutation = useResendCodeMutation();
  const { register, submit } = useNewPasswordForm();

  useEffect(() => {
    if (confirmationEmail === '') {
      navigate('/sign-in');
    }
  }, [confirmationEmail, navigate]);

  const handleResendCode = () => {
    resendCodeMutation.mutate({
      email: confirmationEmail,
    });
  };

  return (
    <FormCard>
      <FormCardHeader
        title="Create New Password"
        subtitle="Please enter a strong password and confirm it with the code that was sent to your email"
      />
      <Form onSubmit={submit}>
        <FormInput
          type="password"
          placeholder="New password"
          {...register('newPassword', { required: true })}
        />
        {/* <FormInput
          type="password"
          placeholder="Confirm password"
        /> */}
        <ConfirmCodeInput
          register={register}
          handleResendCode={handleResendCode}
        />
        <SubmitFormBtn>Update password</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          Back to <Link to="/sign-in">Sign In</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};
export default NewPasswdForm;
