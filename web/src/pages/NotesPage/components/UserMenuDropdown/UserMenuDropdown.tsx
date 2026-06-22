import Dropdown from '../../../../components/Dropdown/Dropdown';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useDropdownActions } from './useDropdownActions';

const UserMenuDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const { logout } = useDropdownActions();

  return (
    <Dropdown isOpen={isOpen}>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem onClick={logout}>Log out</DropdownItem>
    </Dropdown>
  );
};
export default UserMenuDropdown;
