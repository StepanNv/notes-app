import styles from './SquareSvgBtn.module.scss';

const SquareSvgBtn = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.squareSvgBtn}>{children}</div>;
};
export default SquareSvgBtn;
