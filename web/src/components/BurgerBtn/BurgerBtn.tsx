import SquareSvgBtn from '../../ui/SquareSvgBtn/SquareSvgBtn';
import BurgerIcon from '/src/assets/icons/burger.svg?react';

const BurgerBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <BurgerIcon />
    </SquareSvgBtn>
  );
};
export default BurgerBtn;
