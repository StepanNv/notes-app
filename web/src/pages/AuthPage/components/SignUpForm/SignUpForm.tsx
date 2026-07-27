import { Link } from 'react-router-dom';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import Form from '../../ui/Form/Form';
import { useSignUpForm } from './useSignUpForm';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Create an account',
    subtitle: 'Sign up to get started',
    emailPlaceholder: 'Email address',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    signUpBtn: 'Sign Up',
    alreadyHaveAccountText: 'Already have an account? ',
    signInLink: 'Sign in',
  },
  ru: {
    title: 'Создать аккаунт',
    subtitle: 'Зарегистрируйтесь, чтобы начать',
    emailPlaceholder: 'Адрес электронной почты',
    usernamePlaceholder: 'Имя пользователя',
    passwordPlaceholder: 'Пароль',
    signUpBtn: 'Зарегистрироваться',
    alreadyHaveAccountText: 'Уже есть аккаунт? ',
    signInLink: 'Войти',
  },
};

const SignUpForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const { register, submit } = useSignUpForm();

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
          type="text"
          placeholder={content.usernamePlaceholder}
          {...register('username', { required: true })}
        />
        <FormInput
          type="password"
          placeholder={content.passwordPlaceholder}
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>{content.signUpBtn}</SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          {content.alreadyHaveAccountText}
          <Link to="/sign-in">{content.signInLink}</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default SignUpForm;
