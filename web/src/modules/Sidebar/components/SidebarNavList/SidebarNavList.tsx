import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';
import styles from './SidebarNavList.module.scss';
import NotesIcon from '/src/assets/icons/notes.svg?react';
import ArchiveIcon from '/src/assets/icons/archive.svg?react';
import TrashIcon from '/src/assets/icons/trash-can.svg?react';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SidebarNavList = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <nav className={styles.navList}>
      <ul>
        <SidebarNavItem
          path="/notes"
          Icon={NotesIcon}
          name={language === 'en' ? 'Notes' : 'Заметки'}
        />
        <SidebarNavItem
          path="/archive"
          Icon={ArchiveIcon}
          name={language === 'en' ? 'Archive' : 'Архив'}
        />
        <SidebarNavItem
          path="/trash"
          Icon={TrashIcon}
          name={language === 'en' ? 'Trash' : 'Корзина'}
        />
      </ul>
    </nav>
  );
};

export default SidebarNavList;
