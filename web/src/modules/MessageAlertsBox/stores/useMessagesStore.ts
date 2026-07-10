import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TMessage = {
  id: string;
  title: string;
  message: string;
};

type TUseMessagesStore = {
  messages: TMessage[];
  addMessage: (message: string) => void;
  removeMessage: (messageId: string) => void;
};

export const useMessagesStore = create<TUseMessagesStore>()((set) => ({
  messages: [],
  addMessage: (message: string) => {
    set((state) => ({
      messages: [
        ...state.messages,
        { id: uuidv4(), title: 'Message', message },
      ],
    }));
  },
  removeMessage: (messageId: string) => {
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== messageId),
    }));
  },
}));
