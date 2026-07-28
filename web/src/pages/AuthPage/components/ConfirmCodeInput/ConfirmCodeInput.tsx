import styles from './ConfirmCodeInput.module.scss';
import type { UseFormRegister } from 'react-hook-form';
import FormInput from '../../ui/FormInput/FormInput';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

const contentTranlations = {
  en: {
    codePlaceholder: 'Code',
    resendCodeBtn: 'Resend',
  },
  ru: {
    codePlaceholder: 'Код',
    resendCodeBtn: 'Отправить повторно',
  },
};

type TConfirmCodeInputProps = {
  register: UseFormRegister<{ confirmationCode: string }>;
  handleResendCode: () => void;
};

const ConfirmCodeInput = ({
  register,
  handleResendCode,
}: TConfirmCodeInputProps) => {
  const language = useAppSettingsStore((state) => state.language);
  const content =
    language === 'en' ? contentTranlations.en : contentTranlations.ru;

  return (
    <div className={styles.confirmCodeInput}>
      <FormInput
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        minLength="6"
        maxLength="6"
        placeholder={content.codePlaceholder}
        {...register('confirmationCode', { required: true })}
      />
      <button
        className={styles.resendBtn}
        type="button"
        onClick={handleResendCode}
      >
        {content.resendCodeBtn}
      </button>
    </div>
  );
};

export default ConfirmCodeInput;
