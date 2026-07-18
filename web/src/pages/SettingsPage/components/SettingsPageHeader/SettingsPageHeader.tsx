import styles from './SettingsPageHeader.module.scss';
import Header from '../../../../ui/Header/Header';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';
import { useNavigate } from 'react-router-dom';

const SettingsPageHeader = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <div className={styles.content}>
        <BlueHeaderBtn onClick={() => navigate(-1)}>Back</BlueHeaderBtn>
      </div>
    </Header>
  );
};
export default SettingsPageHeader;
