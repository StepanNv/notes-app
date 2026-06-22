import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import ArrowDownIcon from '/src/assets/icons/arrow-down.svg?react';

const DownNoteBtn = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <SquareSvgBtn onClick={onClick} disabled={disabled}>
      <ArrowDownIcon />
    </SquareSvgBtn>
  );
};
export default DownNoteBtn;
