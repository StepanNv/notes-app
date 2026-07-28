import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import ArrowUpIcon from '/src/assets/icons/arrow-up.svg?react';

const UpNoteBtn = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <SquareSvgBtn onClick={onClick} disabled={disabled}>
      <ArrowUpIcon />
    </SquareSvgBtn>
  );
};
export default UpNoteBtn;
