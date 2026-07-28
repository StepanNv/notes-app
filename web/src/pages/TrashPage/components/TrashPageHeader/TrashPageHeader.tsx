import NavBar from '../../../../components/NavBar/NavBar';
import Header from '../../../../ui/Header/Header';
import styles from './TrashPageHeader.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    currentPage: 'Trash',
  },
  ru: {
    currentPage: 'Корзина',
  },
};

const TrashPageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage={content.currentPage} />
      </div>
    </Header>
  );
};

export default TrashPageHeader;
