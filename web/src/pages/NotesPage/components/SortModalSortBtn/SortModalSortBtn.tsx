import styles from './SortModalSortBtn.module.scss';
import CheckmarkIcon from '/src/assets/icons/checkmark.svg?react';

const SortModalSortBtn = ({
  isSelected,
  label,
  onClick,
}: {
  isSelected: boolean | null;
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${styles.sortModalSortBtn} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div className={styles.isSelectedIndicator}>
        {isSelected && <CheckmarkIcon />}
      </div>
      <span>{label}</span>
    </button>
  );
};
export default SortModalSortBtn;
