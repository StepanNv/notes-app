import styles from './PaletteBtn.module.scss';
import PaletteIcon from '/src/assets/icons/palette.svg?react';

const PaletteBtn = ({ onClick }: { onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <button className={styles.paletteBtn} onClick={handleClick}>
      <PaletteIcon />
    </button>
  );
};
export default PaletteBtn;
