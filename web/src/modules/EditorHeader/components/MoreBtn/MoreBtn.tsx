import SquareSvgBtn from "../../../../ui/SquareSvgBtn/SquareSvgBtn"
import MoreIcon from '/src/assets/icons/more.svg?react';

const MoreBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <MoreIcon />
    </SquareSvgBtn>
  )
}
export default MoreBtn