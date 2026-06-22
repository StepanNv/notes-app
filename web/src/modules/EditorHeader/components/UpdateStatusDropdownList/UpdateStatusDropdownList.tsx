import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import DropdownList from '../../../../components/DropdownList/DropdownList';

const UpdateStatusDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem>Archive</DropdownItem>
      <DropdownItem>Trash</DropdownItem>
    </DropdownList>
  );
};
export default UpdateStatusDropdownList;
