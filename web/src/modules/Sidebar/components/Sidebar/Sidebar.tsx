import styles from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSidebarStore } from '../../stores/useSidebarStore';
import Backdrop from '../../../../ui/Backdrop/Backdrop';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarNavList from '../SidebarNavList/SidebarNavList';

const Sidebar = () => {
  const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const location = useLocation();

  useEffect(() => {
    if (isSidebarOpened) {
      closeSidebar();
    }
  }, [location.pathname]);

  return (
    <Backdrop isOpen={isSidebarOpened} onClose={closeSidebar}>
      <div
        className={`${styles.sidebar} ${isSidebarOpened ? styles.opened : ''}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <SidebarHeader /> 
        <SidebarNavList />
      </div>
    </Backdrop>
  );
};

export default Sidebar;
