import type { ReactNode } from 'react';
import styles from './Backdrop.module.scss';

type TBackdropProps = {
  isOpen: boolean;
  children: ReactNode;
};

const Backdrop = ({ isOpen, children }: TBackdropProps) => {
  return (
    <div className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`}>
      {children}
    </div>
  );
};
export default Backdrop;
