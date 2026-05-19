import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';
import styles from './SidebarNavList.module.scss';
import NotesIcon from '/src/assets/icons/notes.svg?react';
import ArchiveIcon from '/src/assets/icons/archive.svg?react';
import TrashIcon from '/src/assets/icons/trash-can.svg?react';

const SidebarNavList = () => {
  return (
    <nav className={styles.navList}>
      <ul>
        <SidebarNavItem path="/notes" Icon={NotesIcon} name="Notes" />
        <SidebarNavItem path="/archive" Icon={ArchiveIcon} name="Archive" />
        <SidebarNavItem path="/trash" Icon={TrashIcon} name="Trash" />
      </ul>
    </nav>
  );
};
export default SidebarNavList;
