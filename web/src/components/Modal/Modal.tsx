import Backdrop from '../../ui/Backdrop/Backdrop';
import styles from './Modal.module.scss';
import { useModalStore } from '../../stores/useModalStore';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useRef } from 'react';

type TModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: TModalProps) => {
  const { closeModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => closeModal());

  return (
    <Backdrop isOpen={isOpen}>
      <div className={styles.modal} ref={modalRef}>{children}</div>
    </Backdrop>
  );
};
export default Modal;
