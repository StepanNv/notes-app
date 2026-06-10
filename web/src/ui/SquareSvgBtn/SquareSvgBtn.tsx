import styles from './SquareSvgBtn.module.scss';

const SquareSvgBtn = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={styles.squareSvgBtn}
      onMouseDown={(event) => event.preventDefault()}
      {...props}
    >
      {children}
    </button>
  );
};
export default SquareSvgBtn;
