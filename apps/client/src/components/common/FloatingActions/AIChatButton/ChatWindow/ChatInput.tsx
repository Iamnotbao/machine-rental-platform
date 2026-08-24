import { useState } from 'react';

import styles from './ChatInput.module.css';

interface Props {
  onSend: (text: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [value, setValue] = useState('');

  const submit = () => {
    if (!value.trim()) return;

    onSend(value);

    setValue('');
  };

  return (
    <div className={styles.input}>
      <input
        value={value}

        placeholder="Nhập câu hỏi..."

        onChange={(e) => setValue(e.target.value)}

        onKeyDown={(e) => {
          if (e.key === 'Enter') submit();
        }}
      />

      <button onClick={submit}>Gửi</button>
    </div>
  );
};

export default ChatInput;
