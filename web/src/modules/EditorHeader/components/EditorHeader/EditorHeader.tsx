import CrossBtn from '../../../../components/CrossBtn/CrossBtn';
import Header from '../../../../ui/Header/Header';
import PaletteBtn from '../PaletteBtn/PaletteBtn';
import styles from './EditorHeader.module.scss';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
// import UpNoteBtn from '../UpNoteBtn/UpNoteBtn';
// import DownNoteBtn from '../DownNoteBtn/DownNoteBtn';
import UpdateStatusDropdown from '../UpdateStatusDropdown/UpdateStatusDropdown';
import { useModalStore } from '../../../../stores/useModalStore';

const contentTranlations = {
  en: {
    selectedText: 'Selected: ',
  },
  ru: {
    selectedText: 'Выбрано: ',
  },
};

const EditorHeader = ({
  currentPage,
}: {
  currentPage: 'notes' | 'archive' | 'trash';
}) => {
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  const deselectAll = useNotesSelectionStore((state) => state.clear);
  const openModal = useModalStore((state) => state.openModal);
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <Header>
      <div className={styles.container}>
        <div className={styles.group}>
          <CrossBtn onClick={() => deselectAll()} />
          <div className={styles.selectedNotesCounter}>
            {content.selectedText}
            {selectedNotes.size}
          </div>
        </div>
        <div className={styles.group}>
          {/* <UpNoteBtn onClick={() => {}}/>
          <DownNoteBtn onClick={() => {}} /> */}
          {currentPage !== 'trash' && (
            <PaletteBtn onClick={() => openModal('updateNotesColor')} />
          )}
          <UpdateStatusDropdown currentPage={currentPage} />
        </div>
      </div>
    </Header>
  );
};

export default EditorHeader;
