import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useUserMenuActions } from './useUserMenuActions';

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { signOut } = useUserMenuActions();

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem onClick={signOut}>Sign out</DropdownItem>
    </DropdownList>
  );
};
export default UserMenuDropdownList;
