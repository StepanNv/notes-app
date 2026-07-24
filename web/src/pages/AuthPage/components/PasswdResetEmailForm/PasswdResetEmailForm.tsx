import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link } from 'react-router-dom';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { usePasswdResetForm } from './usePasswdResetForm';

const PasswdResetEmailForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const { register, submit } = usePasswdResetForm();

  return (
    <FormCard>
      <FormCardHeader
        title={language === 'en' ? 'Reset password' : 'Сброс пароля'}
        subtitle={
          language === 'en'
            ? 'Please enter your email to reset your password'
            : 'Пожалуйста, введите ваш email для сброса пароля'
        }
      />
      <Form onSubmit={submit}>
        <FormInput
          type="email"
          placeholder={language === 'en' ? 'Your email' : 'Ваш email'}
          {...register('email', { required: true })}
        />
        <SubmitFormBtn>
          {language === 'en' ? 'Continue' : 'Продолжить'}
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

export default PasswdResetEmailForm;
