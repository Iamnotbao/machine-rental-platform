import type { HTMLAttributes, ReactNode } from 'react';
import styles from './ui.module.css';

type HeadingSize = 'display' | 'section' | 'card';
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  size?: HeadingSize;
}
const headingSizeClass: Record<HeadingSize, string> = {
  display: styles.headingDisplay!,
  section: styles.headingSection!,
  card: styles.headingCard!,
};

export function Heading({ children, className = '', size = 'section', ...props }: HeadingProps) {
  return (
    <h2 className={`${styles.heading} ${headingSizeClass[size]} ${className}`} {...props}>
      {children}
    </h2>
  );
}
