import styles from './Sidebar.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSidebarStore } from '../../stores/useSidebarStore';
import Backdrop from '../../../../ui/Backdrop/Backdrop';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarNavList from '../SidebarNavList/SidebarNavList';
import { useClickOutside } from '../../../../hooks/useClickOutside';

const Sidebar = () => {
  const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (isSidebarOpened) {
      closeSidebar();
    }
  }, [location.pathname]);

  useClickOutside(sidebarRef, () => closeSidebar());

  return (
    <Backdrop isOpen={isSidebarOpened}>
      <div
        className={`${styles.sidebar} ${isSidebarOpened ? styles.opened : ''}`}
        ref={sidebarRef}
      >
        <SidebarHeader />
        <SidebarNavList />
      </div>
    </Backdrop>
  );
};

export default Sidebar;
