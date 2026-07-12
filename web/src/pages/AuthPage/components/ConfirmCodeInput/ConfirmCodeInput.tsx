import styles from './ConfirmCodeInput.module.scss';
import type { UseFormRegister } from 'react-hook-form';
import FormInput from '../../ui/FormInput/FormInput';
import type { ConfirmationDto } from '../../../../api/generated/data-contracts';

type TConfirmCodeInputProps = {
  register: UseFormRegister<ConfirmationDto>;
  handleResendCode: () => void;
};

const ConfirmCodeInput = ({
  register,
  handleResendCode,
}: TConfirmCodeInputProps) => {
  return (
    <div className={styles.confirmCodeInput}>
      <FormInput
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        minlength="6"
        maxlength="6"
        placeholder="Code"
        {...register('confirmationCode', { required: true })}
      />
      <button
        className={styles.resendCodeBtn}
        type="button"
        onClick={handleResendCode}
      >
        Resend
      </button>
    </div>
  );
};
export default ConfirmCodeInput;
