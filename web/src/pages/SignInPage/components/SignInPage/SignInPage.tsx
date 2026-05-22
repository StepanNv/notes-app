import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import { SignInForm } from '../../../../modules/SignInForm/index';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod="sign-in" />
      <main className={styles.main}>
        <SignInForm />
      </main>
    </>
  );
};
export default SignInPage;
