import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TMessage = {
  id: string;
  title: string;
  message: string;
  isClosing?: boolean;
};

type TUseMessagesStore = {
  messages: TMessage[];
  pendingMessages: TMessage[];
  addMessage: (message: string) => void;
  removeMessage: (messageId: string) => void;
};

const MAX_VISIBLE_MESSAGES = 5;

const createMessage = (message: string): TMessage => ({
  id: uuidv4(),
  title: 'Message',
  message,
});

const hasClosingMessage = (messages: TMessage[]) =>
  messages.some((message) => message.isClosing);

const closeOldestMessage = (messages: TMessage[]) => {
  const oldestMessage = messages.find((message) => !message.isClosing);

  if (!oldestMessage) {
    return messages;
  }

  return messages.map((message) =>
    message.id === oldestMessage.id
      ? { ...message, isClosing: true }
      : message,
  );
};

export const useMessagesStore = create<TUseMessagesStore>()((set) => ({
  messages: [],
  pendingMessages: [],
  addMessage: (message: string) => {
    set((state) => {
      const newMessage = createMessage(message);

      if (state.messages.length < MAX_VISIBLE_MESSAGES) {
        return { messages: [...state.messages, newMessage] };
      }

      return {
        messages: hasClosingMessage(state.messages)
          ? state.messages
          : closeOldestMessage(state.messages),
        pendingMessages: [...state.pendingMessages, newMessage],
      };
    });
  },
  removeMessage: (messageId: string) => {
    set((state) => {
      const messages = state.messages.filter(
        (message) => message.id !== messageId,
      );
      const [nextMessage, ...pendingMessages] = state.pendingMessages;

      if (!nextMessage) {
        return { messages };
      }

      const visibleMessages = [...messages, nextMessage];
      const shouldCloseOldestMessage =
        pendingMessages.length > 0 &&
        visibleMessages.length >= MAX_VISIBLE_MESSAGES &&
        !hasClosingMessage(visibleMessages);

      return {
        messages: shouldCloseOldestMessage
          ? closeOldestMessage(visibleMessages)
          : visibleMessages,
        pendingMessages,
      };
    });
  },
}));
