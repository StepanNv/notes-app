import styles from './ModalHeader.module.scss';
import CrossBtn from '../CrossBtn/CrossBtn';

const ModalHeader = ({
  title,
  onModalClose,
}: {
  title: string;
  onModalClose: () => void;
}) => {
  return (
    <div className={styles.modalHeader}>
      <h2 className={styles.modalHeaderTitle}>{title}</h2>
      <CrossBtn onClick={onModalClose} />
    </div>
  );
};
export default ModalHeader;
