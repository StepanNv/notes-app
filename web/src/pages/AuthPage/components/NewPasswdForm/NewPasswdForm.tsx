import styles from './NewPasswdForm.module.scss';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useResendCodeMutation } from './useResendCodeMutation';
import { useNewPasswordForm } from './useNewPasswdForm';

const contentTranlations = {
  en: {
    title: 'Create New Password',
    subtitle:
      'Please enter a strong password and confirm it with the code that was sent to your email',
    newPasswordPlaceholder: 'New password',
    updatePasswordBtn: 'Update password',
    codePlaceholder: 'Code',
    resendCodeBtn: 'Resend code',
    backToText: 'Back to ',
    signInLink: 'Sign In',
  },
  ru: {
    title: 'Создайте новый пароль',
    subtitle:
      'Пожалуйста, введите надежный пароль и подтвердите его кодом, отправленным на вашу почту',
    newPasswordPlaceholder: 'Новый пароль',
    updatePasswordBtn: 'Обновить пароль',
    codePlaceholder: 'Код',
    resendCodeBtn: 'Отправить повторно',
    backToText: 'Вернуться к ',
    signInLink: 'Входу',
  },
};

const NewPasswdForm = () => {
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
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
      <FormCardHeader title={content.title} subtitle={content.subtitle} />
      <Form onSubmit={submit}>
        <FormInput
          type="password"
          placeholder={content.newPasswordPlaceholder}
          {...register('newPassword', { required: true })}
        />
        {/* <FormInput
          type="password"
          placeholder="Confirm password"
        /> */}
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
        <SubmitFormBtn>{content.updatePasswordBtn}</SubmitFormBtn>
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

export default NewPasswdForm;
