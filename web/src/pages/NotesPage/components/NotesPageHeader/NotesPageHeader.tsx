import styles from './NotesPageHeader.module.scss';
import BurgerBtn from '../../../../components/BurgerBtn/BurgerBtn';
import Header from '../../../../ui/Header/Header';
import SearchNotesBox from '../SearchNotesBox/SearchNotesBox';

const NotesPageHeader = () => {
  return (
    <Header>
      <div className={styles.content}>
        <BurgerBtn>sfdasfd</BurgerBtn>
        <SearchNotesBox />
      </div>
    </Header>
  );
};
export default NotesPageHeader;
