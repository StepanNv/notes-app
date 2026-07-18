import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useUserMenuActions } from './useUserMenuActions';

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { signOut, navigateToSettings } = useUserMenuActions();

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem onClick={navigateToSettings}>Settings</DropdownItem>
      <DropdownItem onClick={signOut}>Sign out</DropdownItem>
    </DropdownList>
  );
};
export default UserMenuDropdownList;
