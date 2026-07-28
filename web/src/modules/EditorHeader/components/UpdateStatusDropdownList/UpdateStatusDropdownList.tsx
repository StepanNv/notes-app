import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import DropdownList from '../../../../components/DropdownList/DropdownList';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';
import { useUpdateStatus } from './useUpdateStatus';
import { useDeleteMutation } from './useDeleteMutation';

type UpdateStatusDropdownListProps = {
  isOpen: boolean;
  currentPage: 'notes' | 'archive' | 'trash';
};

const UpdateStatusDropdownList = ({
  isOpen,
  currentPage,
}: UpdateStatusDropdownListProps) => {
  const { updateStatus } = useUpdateStatus();
  const deleteMutation = useDeleteMutation();
  const selectedNotes = useNotesSelectionStore((state) => state.selectedNotes);
  const language = useAppSettingsStore((state) => state.language);

  return (
    <DropdownList isOpen={isOpen}>
      {currentPage === 'notes' && (
        <>
          <DropdownItem
            onClick={() =>
              updateStatus({ currentPage: 'notes', action: 'archive' })
            }
          >
            {language === 'en' ? 'Archive' : 'Архивировать'}
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              updateStatus({ currentPage: 'notes', action: 'trash' })
            }
          >
            {language === 'en' ? 'Trash' : 'В корзину'}
          </DropdownItem>
        </>
      )}
      {currentPage === 'archive' && (
        <>
          <DropdownItem
            onClick={() =>
              updateStatus({ currentPage: 'archive', action: 'unarchive' })
            }
          >
            {language === 'en' ? 'Unarchive' : 'Разархивировать'}
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              updateStatus({ currentPage: 'archive', action: 'trash' })
            }
          >
            {language === 'en' ? 'Trash' : 'В корзину'}
          </DropdownItem>
        </>
      )}
      {currentPage === 'trash' && (
        <>
          <DropdownItem
            onClick={() =>
              updateStatus({ currentPage: 'trash', action: 'restore' })
            }
          >
            {language === 'en' ? 'Restore' : 'Восстановить'}
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              deleteMutation.mutate(
                Array.from(selectedNotes).map((note) => note.id)
              )
            }
          >
            {language === 'en' ? 'Delete' : 'Удалить'}
          </DropdownItem>
        </>
      )}
    </DropdownList>
  );
};

export default UpdateStatusDropdownList;