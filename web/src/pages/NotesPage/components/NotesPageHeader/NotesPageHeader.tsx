import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenu from '../UserMenu/UserMenu';
import { useSidebarStore } from '../../../../modules/Sidebar/stores/useSidebarStore';
import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import BurgerIcon from '/src/assets/icons/burger.svg?react';

const NotesPageHeader = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <Header>
      <div className={styles.content}>
        <SquareSvgBtn onClick={openSidebar}>
          <BurgerIcon />
        </SquareSvgBtn>
        <SearchNotesBox />
        <UserMenu />
      </div>
    </Header>
  );
};
export default NotesPageHeader;
