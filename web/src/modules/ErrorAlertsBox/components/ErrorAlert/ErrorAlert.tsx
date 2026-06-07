import styles from './ErrorAlert.module.scss';
import CrossSvg from '../../../../assets/icons/cross.svg?react';
import { useEffect } from 'react';
import { useErrorsStore } from '../../stores/useErrorsStore';

const ErrorAlert = ({
  id,
  title,
  message,
}: {
  id: string;
  title: string;
  message: string;
}) => {
  const removeError = useErrorsStore((state) => state.removeError);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     removeError(id);
  //   }, 2900);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <div className={styles.errorAlert} onAnimationEnd={() => removeError(id)}>
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
