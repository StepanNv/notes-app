import styles from './SettingsPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';
import { useNavigate } from 'react-router-dom';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SettingsPageHeader = () => {
  const navigate = useNavigate();
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.content}>
        <BlueHeaderBtn onClick={() => navigate(-1)}>
          {language === 'en' ? 'Back' : 'Назад'}
        </BlueHeaderBtn>
      </div>
    </Header>
  );
};

export default SettingsPageHeader;
