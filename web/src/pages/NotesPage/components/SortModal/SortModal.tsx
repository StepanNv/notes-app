import styles from './SortModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import { useModalStore } from '../../../../stores/useModalStore';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import SortModalSortBtn from '../SortModalSortBtn/SortModalSortBtn';
import { useNotesSortStore } from '../../../../stores/useNotesSortStore';

const SortModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const sort = useNotesSortStore((state) => state.sort);
  const setSort = useNotesSortStore((state) => state.setSort);

  const isOpen = openedModal === 'sort';

  const handleSortClick = (sort: 'custom' | 'created_at' | 'updated_at') => {
    setSort(sort);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title="Sort by" />
      <div className={styles.content}>
        <SortModalSortBtn
          isSelected={sort === 'custom'}
          label="Custom"
          onClick={() => handleSortClick('custom')}
        />
        <SortModalSortBtn
          isSelected={sort === 'created_at'}
          label="Created at"
          onClick={() => handleSortClick('created_at')}
        />
        <SortModalSortBtn
          isSelected={sort === 'updated_at'}
          label="Updated at"
          onClick={() => handleSortClick('updated_at')}
        />
      </div>
    </Modal>
  );
};
export default SortModal;
