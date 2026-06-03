import styles from './SquareSvgBtn.module.scss';

type TSquareSvgBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SquareSvgBtn = ({ onClick, children }: TSquareSvgBtnProps) => {
  return (
    <button
      type="button"
      className={styles.squareSvgBtn}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default SquareSvgBtn;
