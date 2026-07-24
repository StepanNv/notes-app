import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useUserMenuActions } from './useUserMenuActions';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { signOut, navigateToSettings } = useUserMenuActions();
  const language = useAppSettingsStore((state) => state.language);

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem onClick={navigateToSettings}>
        {language === 'en' ? 'Settings' : 'Настройки'}
      </DropdownItem>
      <DropdownItem onClick={signOut}>
        {language === 'en' ? 'Sign out' : 'Выйти'}
      </DropdownItem>
    </DropdownList>
  );
};

export default UserMenuDropdownList;
