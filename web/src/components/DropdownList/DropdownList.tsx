import styles from './DropdownList.module.scss';

const DropdownList = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return isOpen && <div className={`${styles.dropdownList}`}>{children}</div>;
};
export default DropdownList;
