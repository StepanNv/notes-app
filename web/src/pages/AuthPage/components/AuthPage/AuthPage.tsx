import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import VerifyEmailForm from '../VerifyEmailForm/VerifyEmailForm';
import NewPassForm from '../NewPasswdForm/NewPasswdForm';
import ResetPasswdEmailForm from '../PasswdResetEmailForm/PasswdResetEmailForm';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';

const AuthPage = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod:
    | 'sign-in'
    | 'sign-up'
    | 'new-passwd'
    | 'reset-passwd'
    | 'verify-email';
}) => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod={selectedAuthMethod} />
      <main className={styles.main}>
        {selectedAuthMethod === 'sign-in' && <SignInForm />}
        {selectedAuthMethod === 'sign-up' && <SignUpForm />}
        {selectedAuthMethod === 'new-passwd' && <NewPassForm />}
        {selectedAuthMethod === 'reset-passwd' && <ResetPasswdEmailForm />}
        {selectedAuthMethod === 'verify-email' && <VerifyEmailForm />}
      </main>
    </>
  );
};
export default AuthPage;
