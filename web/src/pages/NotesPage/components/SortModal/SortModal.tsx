import styles from './SortModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import { useModalStore } from '../../../../stores/useModalStore';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import SortModalSortBtn from '../SortModalSortBtn/SortModalSortBtn';
import { useNotesSortStore } from '../../../../stores/useNotesSortStore';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Sort by',
    sortCustom: 'Custom',
    sortCreatedAt: 'Created at',
    sortUpdatedAt: 'Updated at',
  },
  ru: {
    title: 'Сортировка',
    sortCustom: 'По порядку',
    sortCreatedAt: 'По дате создания',
    sortUpdatedAt: 'По дате изменения',
  },
};

const SortModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const sort = useNotesSortStore((state) => state.sort);
  const setSort = useNotesSortStore((state) => state.setSort);
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  const isOpen = openedModal === 'sort';

  const handleSortClick = (sort: 'custom' | 'created_at' | 'updated_at') => {
    setSort(sort);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title={content.title} />
      <div className={styles.content}>
        <SortModalSortBtn
          isSelected={sort === 'custom'}
          label={content.sortCustom}
          onClick={() => handleSortClick('custom')}
        />
        <SortModalSortBtn
          isSelected={sort === 'created_at'}
          label={content.sortCreatedAt}
          onClick={() => handleSortClick('created_at')}
        />
        <SortModalSortBtn
          isSelected={sort === 'updated_at'}
          label={content.sortUpdatedAt}
          onClick={() => handleSortClick('updated_at')}
        />
      </div>
    </Modal>
  );
};

export default SortModal;
