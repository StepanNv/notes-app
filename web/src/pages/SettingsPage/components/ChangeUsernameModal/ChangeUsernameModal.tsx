import styles from './ChangeUsernameModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import { useGetMe } from '../../../../hooks/useGetMe';
import { useChangeUsernameForm } from './useChangeUsernameForm';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Change username',
    usernamePlaceholder: 'New username',
    saveBtn: 'Save',
  },
  ru: {
    title: 'Сменить имя пользователя',
    usernamePlaceholder: 'Новое имя пользователя',
    saveBtn: 'Сохранить',
  },
};

const ChangeUsernameModal = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const openedModal = useModalStore((state) => state.openedModal);
  const { data } = useGetMe();
  const { register, submit } = useChangeUsernameForm(data?.username);

  const isOpen = openedModal === 'changeUsername';

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title={content.title} />
      <form className={styles.content} onSubmit={submit}>
        <input
          className={styles.input}
          type="text"
          placeholder={content.usernamePlaceholder}
          minLength={3}
          maxLength={30}
          {...register('username', { required: true })}
        />
        <button className={styles.submitBtn} type="submit">
          {content.saveBtn}
        </button>
      </form>
    </Modal>
  );
};

export default ChangeUsernameModal;
