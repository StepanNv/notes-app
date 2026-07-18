import { useEffect, useState } from 'react';
import styles from './ChangePasswordModal.module.scss';
import Modal from '../../../../components/Modal/Modal';
import ModalHeader from '../../../../components/ModalHeader/ModalHeader';
import { useModalStore } from '../../../../stores/useModalStore';
import { useGetMyProfile } from '../../../../hooks/useGetMyProfile';
import { useRequestResetCodeMutation } from './useRequestResetCodeMutation';
import { useChangePasswordForm } from './useChangePasswordForm';

const ChangePasswordModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const { data } = useGetMyProfile();
  const email = data?.data.email ?? '';

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
      <ModalHeader title="Change password" />
      <div className={styles.content}>
        {step === 'request' ? (
          <>
            <p className={styles.hint}>
              We'll send a 6-digit confirmation code to <b>{email}</b>.
            </p>
            <button
              className={styles.submitBtn}
              type="button"
              onClick={handleSendCode}
              disabled={requestResetCodeMutation.isPending || !email}
            >
              {requestResetCodeMutation.isPending ? 'Sending...' : 'Send code'}
            </button>
          </>
        ) : (
          <form className={styles.form} onSubmit={submit}>
            <input
              className={styles.input}
              type="password"
              placeholder="New password"
              {...register('newPassword', { required: true })}
            />
            <input
              className={styles.input}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              minLength={6}
              maxLength={6}
              placeholder="Confirmation code"
              {...register('confirmationCode', { required: true })}
            />
            <button
              className={styles.resendBtn}
              type="button"
              onClick={handleSendCode}
            >
              Resend code
            </button>
            <button className={styles.submitBtn} type="submit">
              Update password
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};
export default ChangePasswordModal;
