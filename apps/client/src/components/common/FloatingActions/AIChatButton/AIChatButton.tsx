import { useState } from 'react';

import ChatWindow from './ChatWindow/ChatWindow';

import styles from './AIChatButton.module.css';

import { MessageCircle } from 'lucide-react';

const AIChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWindow onClose={() => setOpen(false)} />}

      <button className={styles.button} onClick={() => setOpen(!open)} aria-label="AI Chat">
        <MessageCircle size={28} />
      </button>
    </>
  );
};

export default AIChatButton;
