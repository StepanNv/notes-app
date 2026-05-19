import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';
import styles from './SidebarNavList.module.scss';
import NotesIcon from '/src/assets/icons/notes.svg?react';

const SidebarNavList = () => {
  return (
    <nav className={styles.navList}>
      <ul>
        <SidebarNavItem path="/notes" Icon={NotesIcon} name="Notes" />
      </ul>
    </nav>
  );
};
export default SidebarNavList;
