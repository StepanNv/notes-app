import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

const AuthPage = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod: 'sign-in' | 'sign-up';
}) => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod={selectedAuthMethod} />
      {selectedAuthMethod === 'sign-in' ? <SignInForm /> : <SignUpForm />}
    </>
  );
};
export default AuthPage;
