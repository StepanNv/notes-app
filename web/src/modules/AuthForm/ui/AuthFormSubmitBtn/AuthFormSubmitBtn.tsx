import styles from './AuthFormSubmitBtn.module.scss';

const AuthFormSubmitBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={styles.authFormSubmitBtn} type="submit">
      {children}
    </button>
  );
};
export default AuthFormSubmitBtn;
