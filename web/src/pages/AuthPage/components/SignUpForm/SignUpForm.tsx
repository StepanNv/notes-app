import { Link } from 'react-router-dom';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import Form from '../../ui/Form/Form';
import { useSignUpForm } from './useSignUpForm';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SignUpForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const { register, submit } = useSignUpForm();

  return (
    <FormCard>
      <FormCardHeader
        title={language === 'en' ? 'Create an account' : 'Создать аккаунт'}
        subtitle={
          language === 'en'
            ? 'Sign up to get started'
            : 'Зарегистрируйтесь, чтобы начать'
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
          type="text"
          placeholder={language === 'en' ? 'Username' : 'Имя пользователя'}
          {...register('username', { required: true })}
        />
        <FormInput
          type="password"
          placeholder={language === 'en' ? 'Password' : 'Пароль'}
          {...register('password', { required: true })}
        />
        <SubmitFormBtn>
          {language === 'en' ? 'Sign Up' : 'Зарегистрироваться'}
        </SubmitFormBtn>
      </Form>
      <FormCardFooter>
        <span>
          {language === 'en'
            ? 'Already have an account? '
            : 'Уже есть аккаунт? '}
          <Link to="/sign-in">{language === 'en' ? 'Sign in' : 'Войти'}</Link>
        </span>
      </FormCardFooter>
    </FormCard>
  );
};

export default SignUpForm;
