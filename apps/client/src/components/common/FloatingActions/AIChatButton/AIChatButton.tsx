import { useState } from "react";

import ChatWindow from "./ChatWindow/ChatWindow";

import styles from "./AIChatButton.module.css";


const AIChatButton = () => {

  const [open, setOpen] = useState(false);


  return (
    <>
      {
        open && (
          <ChatWindow 
            onClose={() => setOpen(false)}
          />
        )
      }


      <button
        className={styles.button}
        onClick={() => setOpen(!open)}
        aria-label="AI Chat"
      >
        🤖
      </button>

    </>
  );
};


export default AIChatButton;