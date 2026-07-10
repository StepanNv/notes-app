import styles from './MessageAlert.module.scss';
import CheckmarkSvg from '../../../../assets/icons/checkmark.svg?react';
import { useMessagesStore } from '../../stores/useMessagesStore';

const MessageAlert = ({
  id,
  title,
  message,
}: {
  id: string;
  title: string;
  message: string;
}) => {
  const removeMessage = useMessagesStore((state) => state.removeMessage);

  return (
    <div
      className={styles.messageAlert}
      onAnimationEnd={() => removeMessage(id)}
    >
      <div className={styles.iconWrapper}>
        <CheckmarkSvg />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default MessageAlert;
