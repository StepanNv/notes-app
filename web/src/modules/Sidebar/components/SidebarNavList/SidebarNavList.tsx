import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';
import styles from './SidebarNavList.module.scss';
import NotesIcon from '/src/assets/icons/notes.svg?react';
import ArchiveIcon from '/src/assets/icons/archive.svg?react';
import TrashIcon from '/src/assets/icons/trash-can.svg?react';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    notes: 'Notes',
    archive: 'Archive',
    trash: 'Trash',
  },
  ru: {
    notes: 'Заметки',
    archive: 'Архив',
    trash: 'Корзина',
  },
};

const SidebarNavList = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <nav className={styles.navList}>
      <ul>
        <SidebarNavItem path="/notes" Icon={NotesIcon} name={content.notes} />
        <SidebarNavItem
          path="/archive"
          Icon={ArchiveIcon}
          name={content.archive}
        />
        <SidebarNavItem path="/trash" Icon={TrashIcon} name={content.trash} />
      </ul>
    </nav>
  );
};

export default SidebarNavList;
