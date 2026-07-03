import styles from './ModalFooterBtn.module.scss';

const ModalFooterBtn = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  return <button className={styles.modalFooterBtn} onClick={onClick}>{children}</button>;
};
export default ModalFooterBtn;
