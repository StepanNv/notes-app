import NavBar from '../../../../components/NavBar/NavBar';
import Header from '../../../../ui/Header/Header';
import styles from './TrashPageHeader.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const TrashPageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage={language === 'en' ? 'Trash' : 'Корзина'} />
      </div>
    </Header>
  );
};

export default TrashPageHeader;
