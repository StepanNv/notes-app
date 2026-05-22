import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import { SignUpForm } from '../../../../modules/SignUpForm/index';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod="sign-up" />
      <main className={styles.main}>
        <SignUpForm />
      </main>
    </>
  );
};
export default SignUpPage;
