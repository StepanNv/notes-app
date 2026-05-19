import styles from './NavBar.module.scss';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import { useSidebarStore } from '../../modules/Sidebar/stores/useSidebarStore';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage }: { currentPage: string }) => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);
  return (
    <div className={styles.navBar}>
      <BurgerBtn onClick={() => openSidebar()} />
      <Link to="/notes" className={styles.currentPageInfo}>
        <Logo isAppNameVisible={false} />
        <div className={styles.currentPageName}>{currentPage}</div>
      </Link>
    </div>
  );
};
export default NavBar;
