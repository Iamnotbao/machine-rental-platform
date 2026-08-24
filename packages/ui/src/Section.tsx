import type { HTMLAttributes } from 'react';
import styles from './ui.module.css';

export function Section({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`${styles.section} ${className}`} {...props} />;
}
