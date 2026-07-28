import styles from './FormCardHeader.module.scss';

const FormCardHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className={styles.formCardHeader}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};
export default FormCardHeader;
