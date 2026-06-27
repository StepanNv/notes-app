import styles from './ModalFooter.module.scss';

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.modalFooter}>{children}</div>;
};

export default ModalFooter;
