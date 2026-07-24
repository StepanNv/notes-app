import styles from './SortModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import { useModalStore } from '../../../../stores/useModalStore';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import SortModalSortBtn from '../SortModalSortBtn/SortModalSortBtn';
import { useNotesSortStore } from '../../../../stores/useNotesSortStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const SortModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const sort = useNotesSortStore((state) => state.sort);
  const setSort = useNotesSortStore((state) => state.setSort);
  const language = useAppSettingsStore((state) => state.language);

  const isOpen = openedModal === 'sort';

  const handleSortClick = (sort: 'custom' | 'created_at' | 'updated_at') => {
    setSort(sort);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title={language === 'en' ? 'Sort by' : 'Сортировка'} />
      <div className={styles.content}>
        <SortModalSortBtn
          isSelected={sort === 'custom'}
          label={language === 'en' ? 'Custom' : 'По порядку'}
          onClick={() => handleSortClick('custom')}
        />
        <SortModalSortBtn
          isSelected={sort === 'created_at'}
          label={language === 'en' ? 'Created at' : 'По дате создания'}
          onClick={() => handleSortClick('created_at')}
        />
        <SortModalSortBtn
          isSelected={sort === 'updated_at'}
          label={language === 'en' ? 'Updated at' : 'По дате изменения'}
          onClick={() => handleSortClick('updated_at')}
        />
      </div>
    </Modal>
  );
};

export default SortModal;
