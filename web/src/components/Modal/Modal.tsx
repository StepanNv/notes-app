import Backdrop from '../../ui/Backdrop/Backdrop';
import styles from './Modal.module.scss';
import { useModalStore } from '../../stores/useModalStore';

type TModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: TModalProps) => {
  const { closeModal } = useModalStore();
  return (
    <Backdrop isOpen={isOpen} onClose={closeModal}>
      <div className={styles.modal}>{children}</div>
    </Backdrop>
  );
};
export default Modal;
