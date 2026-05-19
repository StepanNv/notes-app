import type { ReactNode } from 'react';
import styles from './Backdrop.module.scss';

type TBackdropProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Backdrop = ({isOpen, onClose, children}: TBackdropProps) => {
  return (
    <div className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`} onClick={onClose}>
      {children}
    </div>
  )
}
export default Backdrop;