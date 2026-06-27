import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import DropdownList from '../../../../components/DropdownList/DropdownList';
import { useUpdateStatus } from './useUpdateStatus';

type UpdateStatusDropdownListProps = {
  isOpen: boolean;
  currentPage: 'notes' | 'archive' | 'trash';
};

const UpdateStatusDropdownList = ({
  isOpen,
  currentPage,
}: UpdateStatusDropdownListProps) => {
  const { updateStatus } = useUpdateStatus();

  return (
    <DropdownList isOpen={isOpen}>
      {currentPage === 'notes' && (
        <>
          <DropdownItem onClick={() => updateStatus({ currentPage: 'notes', action: 'archive' })}>
            Archive
          </DropdownItem>
          <DropdownItem onClick={() => updateStatus({ currentPage: 'notes', action: 'trash' })}>
            Trash
          </DropdownItem>
        </>
      )}
      {currentPage === 'archive' && (
        <>
          <DropdownItem onClick={() => updateStatus({ currentPage: 'archive', action: 'unarchive' })}>
            Unarchive
          </DropdownItem>
          <DropdownItem onClick={() => updateStatus({ currentPage: 'archive', action: 'trash' })}>
            Trash
          </DropdownItem>
        </>
      )}
      {currentPage === 'trash' && (
        <>
          <DropdownItem onClick={() => updateStatus({ currentPage: 'trash', action: 'restore' })}>
            Restore
          </DropdownItem>
        </>
      )}
    </DropdownList>
  );
};
export default UpdateStatusDropdownList;
