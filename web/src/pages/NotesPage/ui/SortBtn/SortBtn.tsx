import styles from './SortBtn.module.scss';
import SortIcon from '/src/assets/icons/sort-icon.svg?react';

const SortBtn = () => {
  return (
    <button className={styles.sortBtn}>
      <SortIcon />
    </button>
  );
};
export default SortBtn;
