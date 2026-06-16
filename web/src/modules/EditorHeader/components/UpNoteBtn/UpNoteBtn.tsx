import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import ArrowUpIcon from '/src/assets/icons/arrow-up.svg?react';

const UpNoteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <ArrowUpIcon />
    </SquareSvgBtn>
  );
};
export default UpNoteBtn;
