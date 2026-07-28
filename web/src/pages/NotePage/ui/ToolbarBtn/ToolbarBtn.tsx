import styles from './ToolbarBtn.module.scss';

const ToolbarBtn = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.toolbarBtn} {...props}>
      {children}
    </button>
  );
};
export default ToolbarBtn;
