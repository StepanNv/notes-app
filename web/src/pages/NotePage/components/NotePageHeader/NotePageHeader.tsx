import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './NotePageHeader.module.scss';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const NotePageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <Header>
      <div className={styles.headerBtns}>
        <Link className={styles.headerBtn} to={'/notes'}>
          {language === 'en' ? 'Back' : 'Назад'}
        </Link>
        <BlueHeaderBtn type="submit" form="note-form">
          {language === 'en' ? 'Save' : 'Сохранить'}
        </BlueHeaderBtn>
      </div>
    </Header>
  );
};

export default NotePageHeader;
