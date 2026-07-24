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
import ConfirmCodeInput from '../ConfirmCodeInput/ConfirmCodeInput';
import { useResendCodeMutation } from './useResendCodeMutation';
import { useNewPasswordForm } from './useNewPasswdForm';

const NewPasswdForm = () => {
  const confirmationEmail = useConfirmationEmailStore(
    (state) => state.confirmationEmail,
  );
  const language = useAppSettingsStore((state) => state.language);
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
        title={
          language === 'en' ? 'Create New Password' : 'Создайте новый пароль'
        }
        subtitle={
          language === 'en'
            ? 'Please enter a strong password and confirm it with the code that was sent to your email'
            : 'Пожалуйста, введите надежный пароль и подтвердите его кодом, отправленным на вашу почту'
        }
      />
      <Form onSubmit={submit}>
        <FormInput
          type="password"
          placeholder={language === 'en' ? 'New password' : 'Новый пароль'}
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
        <SubmitFormBtn>
          {language === 'en' ? 'Update password' : 'Обновить пароль'}
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

export default NewPasswdForm;
