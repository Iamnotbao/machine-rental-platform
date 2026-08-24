import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends Element>({
  freezeOnceVisible = true,
  threshold = 0.15,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverOptions = {}) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (freezeOnceVisible && isVisible)) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { root, rootMargin, threshold },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [freezeOnceVisible, isVisible, root, rootMargin, threshold]);

  return { elementRef, isVisible };
}
