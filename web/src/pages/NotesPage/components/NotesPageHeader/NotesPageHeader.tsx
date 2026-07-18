import styles from './NotesPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';
import UserMenuDropdown from '../UserMenuDropdown/UserMenuDropdown';
import NavBar from '../../../../components/NavBar/NavBar';

const NotesPageHeader = () => {
  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage="Notes" />
        <SearchNotesBox />
        <UserMenuDropdown />
      </div>
    </Header>
  );
};
export default NotesPageHeader;
