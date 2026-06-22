import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useDropdownActions } from './useDropdownActions';

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { logout } = useDropdownActions();

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem onClick={logout}>Log out</DropdownItem>
    </DropdownList>
  );
};
export default UserMenuDropdownList;
