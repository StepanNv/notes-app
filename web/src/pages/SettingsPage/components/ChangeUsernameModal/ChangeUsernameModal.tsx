import styles from './ChangeUsernameModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import { useGetMe } from '../../../../hooks/useGetMe';
import { useChangeUsernameForm } from './useChangeUsernameForm';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const ChangeUsernameModal = () => {
  const language = useAppSettingsStore((state) => state.language);
  const openedModal = useModalStore((state) => state.openedModal);
  const { data } = useGetMe();
  const { register, submit } = useChangeUsernameForm(data?.username);

  const isOpen = openedModal === 'changeUsername';

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader
        title={
          language === 'en' ? 'Change username' : 'Сменить имя пользователя'
        }
      />
      <form className={styles.content} onSubmit={submit}>
        <input
          className={styles.input}
          type="text"
          placeholder={
            language === 'en' ? 'New username' : 'Новое имя пользователя'
          }
          minLength={3}
          maxLength={30}
          {...register('username', { required: true })}
        />
        <button className={styles.submitBtn} type="submit">
          {language === 'en' ? 'Save' : 'Сохранить'}
        </button>
      </form>
    </Modal>
  );
};

export default ChangeUsernameModal;
