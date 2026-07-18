import styles from './ChangeUsernameModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import { useGetMyProfile } from '../../../../hooks/useGetMyProfile';
import { useChangeUsernameForm } from './useChangeUsernameForm';

const ChangeUsernameModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const { data } = useGetMyProfile();
  const { register, submit } = useChangeUsernameForm(data?.data.username);

  const isOpen = openedModal === 'changeUsername';

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title="Change username" />
      <form className={styles.content} onSubmit={submit}>
        <input
          className={styles.input}
          type="text"
          placeholder="New username"
          minLength={3}
          maxLength={30}
          {...register('username', { required: true })}
        />
        <button className={styles.submitBtn} type="submit">
          Save
        </button>
      </form>
    </Modal>
  );
};
export default ChangeUsernameModal;
