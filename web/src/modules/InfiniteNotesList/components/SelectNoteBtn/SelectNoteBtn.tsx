import styles from './SelectNoteBtn.module.scss';
import SelectIcon from '/src/assets/icons/select.svg?react';

const SelectNoteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={styles.selectNoteBtn}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <SelectIcon />
    </button>
  );
};
export default SelectNoteBtn;
