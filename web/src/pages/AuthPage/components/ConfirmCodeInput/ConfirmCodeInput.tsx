import styles from './ConfirmCodeInput.module.scss';
import type { UseFormRegister } from 'react-hook-form';
import FormInput from '../../ui/FormInput/FormInput';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

type TConfirmCodeInputProps = {
  register: UseFormRegister<{ confirmationCode: string }>;
  handleResendCode: () => void;
};

const ConfirmCodeInput = ({
  register,
  handleResendCode,
}: TConfirmCodeInputProps) => {
  const language = useAppSettingsStore((state) => state.language);

  return (
    <div className={styles.confirmCodeInput}>
      <FormInput
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        minLength="6"
        maxLength="6"
        placeholder={language === 'en' ? 'Code' : 'Код'}
        {...register('confirmationCode', { required: true })}
      />
      <button
        className={styles.resendCodeBtn}
        type="button"
        onClick={handleResendCode}
      >
        {language === 'en' ? 'Resend' : 'Отправить повторно'}
      </button>
    </div>
  );
};

export default ConfirmCodeInput;
