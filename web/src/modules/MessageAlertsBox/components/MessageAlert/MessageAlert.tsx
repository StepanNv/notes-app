import styles from './MessageAlert.module.scss';
import CheckmarkSvg from '../../../../assets/icons/checkmark.svg?react';
import { useMessagesStore } from '../../stores/useMessagesStore';

const MessageAlert = ({
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
  const removeMessage = useMessagesStore((state) => state.removeMessage);

  return (
    <div
      className={`${styles.messageAlert} ${isClosing ? styles.closing : ''}`}
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
