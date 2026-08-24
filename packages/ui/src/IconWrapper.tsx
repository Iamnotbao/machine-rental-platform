import type { HTMLAttributes } from 'react';
import styles from './ui.module.css';

export function IconWrapper({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`${styles.iconWrapper} ${className}`} {...props} />;
}
