import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useUserMenuActions } from './useUserMenuActions';

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { logout } = useUserMenuActions();

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem onClick={logout}>Log out</DropdownItem>
    </DropdownList>
  );
};
export default UserMenuDropdownList;
