import { useEffect, useState } from 'react';
import styles from './ChangePasswordModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import { useGetMe } from '../../../../hooks/useGetMe';
import { useRequestResetCodeMutation } from './useRequestResetCodeMutation';
import { useChangePasswordForm } from './useChangePasswordForm';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    title: 'Change password',
    hintText: "We'll send a 6-digit confirmation code to ",
    sendingBtn: 'Sending...',
    sendCodeBtn: 'Send code',
    newPasswordPlaceholder: 'New password',
    confirmationCodePlaceholder: 'Confirmation code',
    resendCodeBtn: 'Resend code',
    updatePasswordBtn: 'Update password',
  },
  ru: {
    title: 'Сменить пароль',
    hintText: 'Мы отправим 6-значный код подтверждения на ',
    sendingBtn: 'Отправка...',
    sendCodeBtn: 'Отправить код',
    newPasswordPlaceholder: 'Новый пароль',
    confirmationCodePlaceholder: 'Код подтверждения',
    resendCodeBtn: 'Отправить код повторно',
    updatePasswordBtn: 'Обновить пароль',
  },
};

const ChangePasswordModal = () => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;
  const openedModal = useModalStore((state) => state.openedModal);
  const { data } = useGetMe();
  const email = data?.email ?? '';

  const [step, setStep] = useState<'request' | 'confirm'>('request');

  const requestResetCodeMutation = useRequestResetCodeMutation();
  const { register, submit } = useChangePasswordForm(email, () =>
    setStep('request'),
  );

  const isOpen = openedModal === 'changePassword';

  useEffect(() => {
    if (!isOpen) {
      setStep('request');
    }
  }, [isOpen]);

  const handleSendCode = () => {
    if (!email) return;
    requestResetCodeMutation.mutate(email, {
      onSuccess: () => setStep('confirm'),
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title={content.title} />
      <div className={styles.content}>
        {step === 'request' ? (
          <>
            <p className={styles.hint}>
              {content.hintText}
              <b>{email}</b>.
            </p>
            <button
              className={styles.submitBtn}
              type="button"
              onClick={handleSendCode}
              disabled={requestResetCodeMutation.isPending || !email}
            >
              {requestResetCodeMutation.isPending
                ? content.sendingBtn
                : content.sendCodeBtn}
            </button>
          </>
        ) : (
          <form className={styles.form} onSubmit={submit}>
            <input
              className={styles.input}
              type="password"
              placeholder={content.newPasswordPlaceholder}
              {...register('newPassword', { required: true })}
            />
            <input
              className={styles.input}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              minLength={6}
              maxLength={6}
              placeholder={content.confirmationCodePlaceholder}
              {...register('confirmationCode', { required: true })}
            />
            <button
              className={styles.resendBtn}
              type="button"
              onClick={handleSendCode}
            >
              {content.resendCodeBtn}
            </button>
            <button className={styles.submitBtn} type="submit">
              {content.updatePasswordBtn}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
