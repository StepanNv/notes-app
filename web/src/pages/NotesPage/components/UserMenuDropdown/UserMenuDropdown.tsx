import styles from './UserMenuDropdown.module.scss';
import UserMenuDropdownList from '../UserMenuDropdownList/UserMenuDropdownList';
import { useDropdown } from '../../../../hooks/useDropdown';
import { useGetMe } from '../../../../hooks/useGetMe';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    loading: 'Loading...',
  },
  ru: {
    loading: 'Загрузка...',
  },
};

const UserMenuDropdown = () => {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useDropdown();
  const { data, isLoading, isError } = useGetMe();
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <div className={styles.userMenuDropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {isLoading || isError ? content.loading : data?.username}
      </button>
      <UserMenuDropdownList isOpen={isDropdownOpen} />
    </div>
  );
};

export default UserMenuDropdown;
