import styles from './SquareSvgBtn.module.scss';

const SquareSvgBtn = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.squareSvgBtn}>{children}</button>;
};
export default SquareSvgBtn;
