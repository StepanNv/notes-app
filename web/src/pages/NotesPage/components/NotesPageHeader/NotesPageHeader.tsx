import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenu from '../UserMenu/UserMenu';
import { useSidebarStore } from '../../../../modules/Sidebar/stores/useSidebarStore';
import BurgerBtn from '../../../../components/BurgerBtn/BurgerBtn';

const NotesPageHeader = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <Header>
      <div className={styles.content}>
        <BurgerBtn onClick={openSidebar} />
        <SearchNotesBox />
        <UserMenu />
      </div>
    </Header>
  );
};
export default NotesPageHeader;
