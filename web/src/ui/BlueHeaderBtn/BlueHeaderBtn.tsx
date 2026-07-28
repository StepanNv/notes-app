import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './BlueHeaderBtn.module.scss';

type TBlueHeaderBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const BlueHeaderBtn = ({ children, ...props }: TBlueHeaderBtnProps) => (
  <button className={styles.blueHeaderBtn} {...props}>
    {children}
  </button>
);
export default BlueHeaderBtn;
