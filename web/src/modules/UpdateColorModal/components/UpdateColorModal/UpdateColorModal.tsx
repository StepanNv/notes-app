import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import ModalFooter from '../../../../components/ModalFooter/ModalFooter';
import ModalFooterBtn from '../../../../ui/ModalFooterBtn/ModalFooterBtn';
import ColorSelector from '../ColorSelector/ColorSelector';
import { useColorSelection } from './useColorSelection';
import { useUpdateColorMutation } from './useUpdateColorMutation';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import type { NoteColorKey } from '../../../../consts/noteColors';

const UpdateColorModal = () => {
  const isOpen = useModalStore(
    (state) => state.openedModal === 'updateNotesColor',
  );
  const { selectedColor, setSelectedColor } = useColorSelection();
  const updateColorMutation = useUpdateColorMutation();
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleSave = () => {
    updateColorMutation.mutate({
      ids: Array.from(selectedNotes).map((note) => note.id),
      colorKey: selectedColor as NoteColorKey,
    }, {
      onSuccess: () => {
        clearSelectedNotes();
        closeModal();
      },
    });
  };

  const clearSelectedNotes = useNotesSelectionStore((state) => state.clear);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title="Update Color" />
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ModalFooter>
        <ModalFooterBtn onClick={closeModal}>Cancel</ModalFooterBtn>
        <ModalFooterBtn onClick={handleSave}>Save</ModalFooterBtn>
      </ModalFooter>
    </Modal>
  );
};
export default UpdateColorModal;
