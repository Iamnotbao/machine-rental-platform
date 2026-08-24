import type { HTMLAttributes, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Reveal.module.css';

type RevealDirection = 'up' | 'left' | 'right';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style,
  ...props
}: RevealProps) {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      className={`${styles.reveal} ${styles[direction]} ${isVisible ? styles.visible : ''} ${className}`}
      ref={elementRef}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
