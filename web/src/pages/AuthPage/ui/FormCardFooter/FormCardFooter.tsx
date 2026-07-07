import styles from './FormCardFooter.module.scss';

const FormCardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.formCardFooter}>{children}</div>;
};
export default FormCardFooter;
