import type { HTMLAttributes, ReactNode } from 'react';
import styles from './ui.module.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  lead?: boolean;
}
export function Text({ children, className = '', lead = false, ...props }: TextProps) {
  return (
    <p className={`${styles.text} ${lead ? styles.textLead : ''} ${className}`} {...props}>
      {children}
    </p>
  );
}
