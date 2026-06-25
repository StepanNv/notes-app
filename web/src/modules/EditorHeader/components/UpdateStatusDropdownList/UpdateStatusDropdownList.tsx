import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import DropdownList from '../../../../components/DropdownList/DropdownList';
import { useUpdateStatusMutation } from './useUpdateStatusMutation';
import { useNotesSelectionStore } from '../../../../stores/useNotesSelectionStore';

const UpdateStatusDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const updateStatusMutation = useUpdateStatusMutation();
  const selectedIds = useNotesSelectionStore((state) => state.selectedIds);

  const handleUpdateStatus = () => {
    updateStatusMutation.mutate({
      currentStatus: 'default',
      selectedStatus: 'archived',
      noteIds: Array.from(selectedIds),
    });
  };

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem onClick={handleUpdateStatus}>Archive</DropdownItem>
      <DropdownItem>Trash</DropdownItem>
    </DropdownList>
  );
};
export default UpdateStatusDropdownList;
