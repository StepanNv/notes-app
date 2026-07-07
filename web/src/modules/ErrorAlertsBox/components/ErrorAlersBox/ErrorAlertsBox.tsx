import styles from './ErrorAlertsBox.module.scss';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import { useErrorsStore } from '../../stores/useErrorsStore';

const ErrorAlertsBox = () => {
  const errors = useErrorsStore((state) => state.errors);
  return (
    <div className={styles.errorAlertsBox}>
      {errors.map((error) => (
        <ErrorAlert key={error.id} {...error} />
      ))}
    </div>
  );
};
export default ErrorAlertsBox;
