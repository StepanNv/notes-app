import NavBar from '../../../../components/NavBar/NavBar';
import Header from '../../../../ui/Header/Header';
import styles from './ArchivePageHeader.module.scss';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const ArchivePageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.content}>
        <NavBar currentPage={language === 'en' ? 'Archive' : 'Архив'} />
      </div>
    </Header>
  );
};

export default ArchivePageHeader;
