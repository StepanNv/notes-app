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
import FormInput from '../../ui/FormInput/FormInput';

const contentTranlations = {
  en: {
    title: 'Check your email',
    subtitle: (email: string) =>
      `We sent a 6-digit verification code to ${email}`,
    confirmBtn: 'Confirm',
    codePlaceholder: 'Code',
    resendCodeBtn: 'Resend code',
    backToText: 'Back to ',
    signInLink: 'Sign In',
  },
  ru: {
    title: 'Проверьте вашу почту',
    subtitle: (email: string) =>
      `Мы отправили 6-значный код подтверждения на ${email}`,
    confirmBtn: 'Подтвердить',
    codePlaceholder: 'Код',
    resendCodeBtn: 'Отправить повторно',
    backToText: 'Вернуться к ',
    signInLink: 'Входу',
  },
};

const VerifyEmailForm = () => {
  const { register, submit } = useVerifyEmailForm();
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

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
        title={content.title}
        subtitle={content.subtitle(confimationEmail)}
      />
      <Form onSubmit={submit}>
        <FormInput
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          minLength="6"
          maxLength="6"
          placeholder={content.codePlaceholder}
          {...register('confirmationCode', { required: true })}
        />
        <button
          className={styles.resendBtn}
          type="button"
          onClick={handleResendCode}
        >
          {content.resendCodeBtn}
        </button>
        <SubmitFormBtn>{content.confirmBtn}</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          {content.backToText}
          <Link to="/sign-in">{content.signInLink}</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default VerifyEmailForm;
