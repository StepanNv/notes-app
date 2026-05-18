import SquareSvgBtn from '../../ui/SquareSvgBtn/SquareSvgBtn';
import BurgerIcon from '../../assets/icons/burger.svg?react';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <div className={styles.burgerIconWrapper}>
        <BurgerIcon />
      </div>
    </SquareSvgBtn>
  );
};
export default BurgerBtn;
