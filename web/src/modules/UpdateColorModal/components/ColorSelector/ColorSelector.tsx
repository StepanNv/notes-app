import ColorPickerBtn from '../ColorPickerBtn/ColorPickerBtn';
import styles from './ColorSelector.module.scss';
import { NOTE_COLORS, type NoteColorKey } from '../../../../consts/noteColors';

const ColorSelector = ({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: NoteColorKey | null;
  setSelectedColor: (colorKey: NoteColorKey) => void;
}) => {
  return (
    <div className={styles.colorSelector}>
      {Object.keys(NOTE_COLORS).map((colorKey) => (
        <ColorPickerBtn
          key={colorKey}
          color={colorKey as NoteColorKey}
          isSelected={selectedColor === colorKey}
          onClick={() => setSelectedColor(colorKey as NoteColorKey)}
        />
      ))}
    </div>
  );
};
export default ColorSelector;
