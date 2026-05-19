import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenu from '../UserMenu/UserMenu';
import { useSidebarStore } from '../../../../modules/Sidebar/stores/useSidebarStore';
import NavBar from '../../../../components/NavBar/NavBar';

const NotesPageHeader = () => {
  return (
    <Header>
      <div className={styles.content}>
        <div className={styles.container}>
          <NavBar currentPage="Notes" />
        </div>
        <div className={styles.container}>
          <SearchNotesBox />
        </div>
        <div className={styles.container}>
          <UserMenu />
        </div>
      </div>
    </Header>
  );
};
export default NotesPageHeader;
