import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { useSignInForm } from './useSignInForm';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SignInForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const { register, submit } = useSignInForm();

  return (
    <FormCard>
      <FormCardHeader
        title={language === 'en' ? 'Welcome back!' : 'С возвращением!'}
        subtitle={
          language === 'en'
            ? 'Sign in to your account'
            : 'Войдите в свой аккаунт'
        }
      />
      <Form onSubmit={submit}>
        <FormInput
          type="email"
          placeholder={
            language === 'en' ? 'Email address' : 'Адрес электронной почты'
          }
          {...register('email', { required: true })}
        />
        <FormInput
          type="password"
          placeholder={language === 'en' ? 'Password' : 'Пароль'}
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>{language === 'en' ? 'Sign In' : 'Войти'}</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <Link to="/sign-in/reset-password">
          {language === 'en' ? 'Forgot password?' : 'Забыли пароль?'}
        </Link>
        <span>
          {language === 'en' ? "Don't have an account? " : 'Нет аккаунта? '}
          <Link to="/sign-up">
            {language === 'en' ? 'Sign up' : 'Зарегистрироваться'}
          </Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default SignInForm;
