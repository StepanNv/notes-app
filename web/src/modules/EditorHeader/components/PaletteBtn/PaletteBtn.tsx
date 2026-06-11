import SquareSvgBtn from "../../../../ui/SquareSvgBtn/SquareSvgBtn"
import PaletteIcon from '/src/assets/icons/palette.svg?react';

const PaletteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <SquareSvgBtn onClick={onClick}>
      <PaletteIcon />
    </SquareSvgBtn>
  )
}
export default PaletteBtn