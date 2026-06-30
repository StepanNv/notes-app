import styles from './PaletteBtn.module.scss';
import PaletteIcon from '/src/assets/icons/palette.svg?react';

const PaletteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.paletteBtn} onClick={onClick}>
      <PaletteIcon />
    </button>
  );
};
export default PaletteBtn;
