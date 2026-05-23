import styles from './FormInput.module.scss';

const FormInput = ({ ...props }) => {
  return (
    <input className={styles.formInput} autoComplete="true" {...props}></input>
  );
};

export default FormInput;
