import type { ReactNode } from 'react';
import styles from './LinkBtn.module.scss';

const LinkBtn = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className={styles.linkBtn} onClick={onClick} type="button">
      {children}
    </button>
  );
};
export default LinkBtn;
