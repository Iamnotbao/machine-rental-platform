import type { HTMLAttributes } from 'react';
import styles from './ui.module.css';

export function Skeleton({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden="true" className={`${styles.skeleton} ${className}`} {...props} />;
}
