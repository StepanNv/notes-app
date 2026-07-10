import styles from './MessageAlertsBox.module.scss';
import MessageAlert from '../MessageAlert/MessageAlert';
import { useMessagesStore } from '../../stores/useMessagesStore';

const MessageAlertsBox = () => {
  const messages = useMessagesStore((state) => state.messages);
  return (
    <div className={styles.messageAlertsBox}>
      {messages.map((message) => (
        <MessageAlert key={message.id} {...message} />
      ))}
    </div>
  );
};
export default MessageAlertsBox;
