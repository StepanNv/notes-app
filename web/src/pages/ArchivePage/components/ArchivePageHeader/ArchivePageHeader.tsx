import NavBar from '../../../../components/NavBar/NavBar';
import Header from '../../../../ui/Header/Header';
import styles from './ArchivePageHeader.module.scss';

const ArchivePageHeader = () => {
  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage="Archive" />
      </div>
    </Header>
  );
};
export default ArchivePageHeader;
