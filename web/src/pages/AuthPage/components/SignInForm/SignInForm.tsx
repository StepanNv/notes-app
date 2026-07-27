import { Link } from 'react-router-dom';
import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { useSignInForm } from './useSignInForm';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Welcome back!',
    subtitle: 'Sign in to your account',
    emailPlaceholder: 'Email address',
    passwordPlaceholder: 'Password',
    signInBtn: 'Sign In',
    forgotPasswordLink: 'Forgot password?',
    noAccountText: "Don't have an account? ",
    signUpLink: 'Sign up',
  },
  ru: {
    title: 'С возвращением!',
    subtitle: 'Войдите в свой аккаунт',
    emailPlaceholder: 'Адрес электронной почты',
    passwordPlaceholder: 'Пароль',
    signInBtn: 'Войти',
    forgotPasswordLink: 'Забыли пароль?',
    noAccountText: 'Нет аккаунта? ',
    signUpLink: 'Зарегистрироваться',
  },
};

const SignInForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const { register, submit } = useSignInForm();

  return (
    <FormCard>
      <FormCardHeader title={content.title} subtitle={content.subtitle} />
      <Form onSubmit={submit}>
        <FormInput
          type="email"
          placeholder={content.emailPlaceholder}
          {...register('email', { required: true })}
        />
        <FormInput
          type="password"
          placeholder={content.passwordPlaceholder}
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>{content.signInBtn}</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <Link to="/sign-in/reset-password">{content.forgotPasswordLink}</Link>
        <span>
          {content.noAccountText}
          <Link to="/sign-up">{content.signUpLink}</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default SignInForm;
