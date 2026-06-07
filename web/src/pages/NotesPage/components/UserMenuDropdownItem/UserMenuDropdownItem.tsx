import styles from './UserMenuDropdownItem.module.scss';

const UserMenuDropdownItem = ({ ...props }) => {
  return (
    <div className={styles.userMenuDropdownItem} {...props}>
      {props?.children}
    </div>
  );
};
export default UserMenuDropdownItem;
