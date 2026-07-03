import styles from './ColorPickerBtn.module.scss';
import CheckmarkIcon from '../../../../assets/icons/checkmark.svg?react';
import type { NoteColorKey } from '../../../../consts/noteColors';
import { NOTE_COLORS } from '../../../../consts/noteColors';

const ColorPickerBtn = ({
  isSelected,
  color,
  onClick,
}: {
  isSelected: boolean;
  color: NoteColorKey;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${styles.colorPickerBtn} ${isSelected ? styles.selected : ''}`}
      style={{ backgroundColor: NOTE_COLORS[color] }}
      onClick={onClick}
    >
      {isSelected && <CheckmarkIcon />}
    </button>
  );
};
export default ColorPickerBtn;
