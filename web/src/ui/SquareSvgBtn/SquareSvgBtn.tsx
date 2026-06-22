import styles from './SquareSvgBtn.module.scss';

type TSquareSvgBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const SquareSvgBtn = ({ onClick, children, disabled }: TSquareSvgBtnProps) => {
  return (
    <button
      type="button"
      className={styles.squareSvgBtn}
      disabled={disabled}
      onMouseDown={(event) => event.preventDefault()}
      onClick={(e) => {
        e.stopPropagation();
        if (disabled) return;
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default SquareSvgBtn;
