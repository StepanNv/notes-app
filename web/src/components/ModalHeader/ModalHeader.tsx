import styles from './ModalHeader.module.scss';
import CrossBtn from '../CrossBtn/CrossBtn';
import { useModalStore } from '../../stores/useModalStore';

const ModalHeader = ({ title }: { title: string }) => {
  const { closeModal } = useModalStore();
  return (
    <div className={styles.modalHeader}>
      <span className={styles.modalHeaderTitle}>{title}</span>
      <CrossBtn onClick={closeModal} />
    </div>
  );
};
export default ModalHeader;
