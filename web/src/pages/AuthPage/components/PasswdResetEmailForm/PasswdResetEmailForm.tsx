import Form from '../../ui/Form/Form';
import FormCard from '../../ui/FormCard/AuthFormCard';
import FormCardHeader from '../../ui/FormCardHeader/FormCardHeader';
import FormInput from '../../ui/FormInput/FormInput';
import FormCardFooter from '../../ui/FormCardFooter/FormCardFooter';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import { Link } from 'react-router-dom';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { usePasswdResetForm } from './usePasswdResetForm';

const contentTranlations = {
  en: {
    title: 'Reset password',
    subtitle: 'Please enter your email to reset your password',
    emailPlaceholder: 'Your email',
    continueBtn: 'Continue',
    backToText: 'Back to ',
    signInLink: 'Sign In',
  },
  ru: {
    title: 'Сброс пароля',
    subtitle: 'Пожалуйста, введите ваш email для сброса пароля',
    emailPlaceholder: 'Ваш email',
    continueBtn: 'Продолжить',
    backToText: 'Вернуться к ',
    signInLink: 'Входу',
  },
};

const PasswdResetEmailForm = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const { register, submit } = usePasswdResetForm();

  return (
    <FormCard>
      <FormCardHeader title={content.title} subtitle={content.subtitle} />
      <Form onSubmit={submit}>
        <FormInput
          type="email"
          placeholder={content.emailPlaceholder}
          {...register('email', { required: true })}
        />
        <SubmitFormBtn>{content.continueBtn}</SubmitFormBtn>
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

export default PasswdResetEmailForm;
