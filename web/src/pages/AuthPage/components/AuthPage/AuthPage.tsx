import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';
import { ErrorAlersBox } from '../../../../modules/ErrorAlertsBox/index';

const AuthPage = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod: 'sign-in' | 'sign-up';
}) => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod={selectedAuthMethod} />
      <main className={styles.main}>
        {selectedAuthMethod === 'sign-in' ? <SignInForm /> : <SignUpForm />}
      </main>
      <ErrorAlersBox />
    </>
  );
};
export default AuthPage;
