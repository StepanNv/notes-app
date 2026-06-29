import styles from './SortBtn.module.scss';
import SortIcon from '/src/assets/icons/sort-icon.svg?react';

const SortBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.sortBtn} onClick={onClick}>
      <SortIcon />
    </button>
  );
};
export default SortBtn;
