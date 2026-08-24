import { useState } from 'react';

import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import type { ReactNode } from "react";

import styles from './ChatWindow.module.css';
import { MessageCircle } from 'lucide-react';
import { HandHelping } from "lucide-react";

interface Props {
  onClose: () => void;
}

interface Message {
  role: "user" | "bot";
  text: string;
  icon?: ReactNode;
}

const ChatWindow = ({ onClose }: Props) => {
const [messages, setMessages] = useState<Message[]>([
  {
    role: "bot",
    icon: <HandHelping size={18} />,
    text: "Xin chào! Tôi là trợ lý AI của RENTORA. Tôi có thể hỗ trợ bạn tìm máy phù hợp."
  },
]);

  const sendMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,

      {
        role: 'user',
        text,
      },

      {
        role: 'bot',
        text: 'Tôi đang tìm thông tin máy phù hợp cho bạn...',
      },
    ]);
  };

  return (
    <div className={styles.window}>
      <header className={styles.header}>
        <div>
          <MessageCircle
  size={28}
/> Trợ lý AI
          <p>RENTORA Support</p>
        </div>

        <button onClick={onClose}>×</button>
      </header>

      <div className={styles.messages}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}

            message={message}
          />
        ))}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
