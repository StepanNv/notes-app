import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenuDropdown from '../UserMenuDropdown/UserMenuDropdown';
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
          <UserMenuDropdown />
        </div>
      </div>
    </Header>
  );
};
export default NotesPageHeader;
