import styles from './DropdownItem.module.scss';

const DropdownItem = ({ ...props }) => {
  return (
    <div className={styles.dropdownItem} {...props}>
      {props?.children}
    </div>
  );
};
export default DropdownItem;
