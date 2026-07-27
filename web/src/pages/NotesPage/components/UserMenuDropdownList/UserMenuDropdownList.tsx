import DropdownList from '../../../../components/DropdownList/DropdownList';
import DropdownItem from '../../../../components/DropdownItem/DropdownItem';
import { useUserMenuActions } from './useUserMenuActions';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    settings: 'Settings',
    signOut: 'Sign out',
  },
  ru: {
    settings: 'Настройки',
    signOut: 'Выйти',
  },
};

const UserMenuDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { signOut, navigateToSettings } = useUserMenuActions();
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <DropdownList isOpen={isOpen}>
      <DropdownItem onClick={navigateToSettings}>
        {content.settings}
      </DropdownItem>
      <DropdownItem onClick={signOut}>{content.signOut}</DropdownItem>
    </DropdownList>
  );
};

export default UserMenuDropdownList;
