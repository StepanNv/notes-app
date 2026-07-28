import styles from './SettingsPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';
import { useNavigate } from 'react-router-dom';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    backBtn: 'Back',
  },
  ru: {
    backBtn: 'Назад',
  },
};

const SettingsPageHeader = () => {
  const navigate = useNavigate();
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.content}>
        <BlueHeaderBtn onClick={() => navigate(-1)}>
          {content.backBtn}
        </BlueHeaderBtn>
      </div>
    </Header>
  );
};

export default SettingsPageHeader;
