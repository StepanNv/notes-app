import NavBar from '../../../../components/NavBar/NavBar';
import Header from '../../../../ui/Header/Header';
import styles from './TrashPageHeader.module.scss';

const TrashPageHeader = () => {
  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage="Trash" />
      </div>
    </Header>
  );
};
export default TrashPageHeader;
