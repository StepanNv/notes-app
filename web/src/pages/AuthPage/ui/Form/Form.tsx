import styles from './Form.module.scss';

type TFormProps = {
  children: React.ReactNode;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};

const Form = ({ children, onSubmit }: TFormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
export default Form;
