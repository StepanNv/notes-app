import { Link } from 'react-router-dom';
import Header from '../../../../ui/Header/Header';
import styles from './NotePageHeader.module.scss';
import BlueHeaderBtn from '../../../../ui/BlueHeaderBtn/BlueHeaderBtn';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    backBtn: 'Back',
    saveBtn: 'Save',
  },
  ru: {
    backBtn: 'Назад',
    saveBtn: 'Сохранить',
  },
};

const NotePageHeader = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.headerBtns}>
        <Link className={styles.headerBtn} to={'/notes'}>
          {content.backBtn}
        </Link>
        <BlueHeaderBtn type="submit" form="note-form">
          {content.saveBtn}
        </BlueHeaderBtn>
      </div>
    </Header>
  );
};

export default NotePageHeader;
