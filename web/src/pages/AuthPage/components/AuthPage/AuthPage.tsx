import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import ConfirmCodeForm from '../ConfirmCodeForm/ConfirmCodeForm';
import NewPassForm from '../NewPassForm/NewPassForm';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';

const AuthPage = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod: 'sign-in' | 'sign-up' | 'new-pass' | 'confirm-code';
}) => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod={selectedAuthMethod} />
      <main className={styles.main}>
        {selectedAuthMethod === 'sign-in' && <SignInForm />}
        {selectedAuthMethod === 'sign-up' && <SignUpForm />}
        {selectedAuthMethod === 'new-pass' && <NewPassForm />}
        {selectedAuthMethod === 'confirm-code' && <ConfirmCodeForm />}
      </main>
    </>
  );
};
export default AuthPage;
