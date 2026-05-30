import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './NotePageHeader.module.scss';

const NotePageHeader = () => {
  return (
    <Header>
      <div className={styles.headerBtns}>
        <Link className={styles.headerBtn} to={'/notes'}>
          Back
        </Link>
        <button className={styles.headerBtn}>Save</button>
      </div>
    </Header>
  );
};
export default NotePageHeader;
