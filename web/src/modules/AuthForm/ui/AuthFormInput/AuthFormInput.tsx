import styles from './AuthFormInput.module.scss';

const AuthFormInput = ({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      className={styles.authFormInput}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="true"
    ></input>
  );
};

export default AuthFormInput;
