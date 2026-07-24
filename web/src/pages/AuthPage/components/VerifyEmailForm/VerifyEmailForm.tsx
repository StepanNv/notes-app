import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { useVerifyEmailForm } from './useVerifyEmailForm';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useResendCodeMutation } from './useResendCodeMutation';
import ConfirmCodeInput from '../ConfirmCodeInput/ConfirmCodeInput';

const VerifyEmailForm = () => {
  const { register, submit } = useVerifyEmailForm();
  const language = useAppSettingsStore((state) => state.language);
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
        title={language === 'en' ? 'Check your email' : 'Проверьте вашу почту'}
        subtitle={
          language === 'en'
            ? `We sent a 6-digit verification code to ${confimationEmail}`
            : `Мы отправили 6-значный код подтверждения на ${confimationEmail}`
        }
      />
      <Form onSubmit={submit}>
        <ConfirmCodeInput
          register={register}
          handleResendCode={handleResendCode}
        />
        <SubmitFormBtn>
          {language === 'en' ? 'Confirm' : 'Подтвердить'}
        </SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          {language === 'en' ? 'Back to ' : 'Вернуться к '}
          <Link to="/sign-in">{language === 'en' ? 'Sign In' : 'Входу'}</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default VerifyEmailForm;
