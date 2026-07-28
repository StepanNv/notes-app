import styles from './ErrorAlert.module.scss';
import CrossSvg from '../../../../assets/icons/cross.svg?react';
import { useErrorsStore } from '../../stores/useErrorsStore';

const ErrorAlert = ({
  id,
  title,
  message,
  isClosing,
}: {
  id: string;
  title: string;
  message: string;
  isClosing?: boolean;
}) => {
  const removeError = useErrorsStore((state) => state.removeError);

  return (
    <div
      className={`${styles.errorAlert} ${isClosing ? styles.closing : ''}`}
      onAnimationEnd={() => removeError(id)}
    >
      <div className={styles.iconWrapper}>
        <CrossSvg />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
