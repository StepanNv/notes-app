import type { ComponentType } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './SidebarNavItem.module.scss';

type TSidebarNavItemProps = {
  path: string;
  Icon: ComponentType;
  name: string;
};

const SidebarNavItem = ({ path, Icon, name }: TSidebarNavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <li
      className={`${styles.navItem} ${path === location.pathname ? styles.active : ''}`}
    >
      <button onClick={() => navigate(path)} className={styles.navBtn}>
        <Icon />
        <span>{name}</span>
      </button>
    </li>
  );
};

export default SidebarNavItem;
