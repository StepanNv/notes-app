import styles from './ErrorAlersBox.module.scss';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import { useErrorsStore } from '../../stores/useErrorsStore';

const ErrorAlersBox = () => {
  const errors = useErrorsStore((state) => state.errors);
  return (
    <div className={styles.errorAlersBox}>
      {errors.map((error) => (
        <ErrorAlert key={error.id} {...error} />
      ))}
    </div>
  );
};
export default ErrorAlersBox;
