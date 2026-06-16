import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import ArrowDownIcon from '/src/assets/icons/arrow-down.svg?react';

const DownNoteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <ArrowDownIcon />
    </SquareSvgBtn>
  );
};
export default DownNoteBtn;
