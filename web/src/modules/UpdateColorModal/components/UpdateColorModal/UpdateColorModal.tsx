import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import ModalFooter from '../../../../components/ModalFooter/ModalFooter';
import ModalFooterBtn from '../../../../ui/ModalFooterBtn/ModalFooterBtn';
import ColorSelector from '../ColorSelector/ColorSelector';
import { useColorSelection } from './useColorSelection';
import { useUpdateColorMutation } from './useUpdateColorMutation';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import type { NoteColorKey } from '../../../../consts/noteColors';

const contentTranlations = {
  en: {
    title: 'Update Color',
    cancelBtn: 'Cancel',
    saveBtn: 'Save',
  },
  ru: {
    title: 'Изменить цвет',
    cancelBtn: 'Отмена',
    saveBtn: 'Сохранить',
  },
};

const UpdateColorModal = () => {
  const isOpen = useModalStore(
    (state) => state.openedModal === 'updateNotesColor',
  );
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const { selectedColor, setSelectedColor } = useColorSelection();
  const updateColorMutation = useUpdateColorMutation();
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleSave = () => {
    updateColorMutation.mutate(
      {
        ids: Array.from(selectedNotes).map((note) => note.id),
        colorKey: selectedColor as NoteColorKey,
      },
      {
        onSuccess: () => {
          clearSelectedNotes();
          closeModal();
        },
      },
    );
  };

  const clearSelectedNotes = useNotesSelectionStore((state) => state.clear);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title={content.title} />
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ModalFooter>
        <ModalFooterBtn onClick={closeModal}>
          {content.cancelBtn}
        </ModalFooterBtn>
        <ModalFooterBtn onClick={handleSave}>{content.saveBtn}</ModalFooterBtn>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateColorModal;
