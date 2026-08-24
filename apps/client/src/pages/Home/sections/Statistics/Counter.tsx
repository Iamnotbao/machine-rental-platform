import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface CounterProps {
  value: number;
  suffix: string;
}

export function Counter({ suffix, value }: CounterProps) {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setCount(value);
      return;
    }
    const duration = 1200;
    let animationFrame = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) animationFrame = requestAnimationFrame(tick);
    };
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}
