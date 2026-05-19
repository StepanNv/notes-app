import type { ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarNavItem.module.scss';

type TSidebarNavItemProps = {
  path: string;
  Icon: ComponentType;
  name: string;
};

const SidebarNavItem = ({ path, Icon, name }: TSidebarNavItemProps) => {
  const location = useLocation();

  return (
    <li
      className={`${styles.navItem} ${path === location.pathname ? styles.active : ''}`}
    >
      <Link to={path} className={styles.navLink}>
        <Icon />
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
