import styles from './SquareSvgBtn.module.scss';

type TSquareSvgBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SquareSvgBtn = ({ onClick, children }: TSquareSvgBtnProps) => {
  return (
    <button className={styles.squareSvgBtn} onClick={onClick}>
      {children}
    </button>
  );
};
export default SquareSvgBtn;
