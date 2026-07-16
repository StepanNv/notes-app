import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './NotePageHeader.module.scss';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';

const NotePageHeader = () => {
  return (
    <Header>
      <div className={styles.headerBtns}>
        <Link className={styles.headerBtn} to={'/notes'}>
          Back
        </Link>
        <BlueHeaderBtn type="submit" form="note-form">
          Save
        </BlueHeaderBtn>
      </div>
    </Header>
  );
};
export default NotePageHeader;
