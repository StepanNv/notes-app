import SquareSvgBtn from '../../ui/SquareSvgBtn/SquareSvgBtn';
import CrossIcon from '/src/assets/icons/cross.svg?react';

const CrossBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <CrossIcon />
    </SquareSvgBtn>
  );
};
export default CrossBtn;
