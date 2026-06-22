import styles from './Dropdown.module.scss';

const Dropdown = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return isOpen && <div className={`${styles.dropdown}`}>{children}</div>;
};
export default Dropdown;
