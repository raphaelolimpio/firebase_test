import { useRef, useState, useEffect, useCallback } from 'react';

export const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    setIsAtStart(element.scrollLeft === 0);
    setIsAtEnd(element.scrollLeft + element.offsetWidth >= element.scrollWidth);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      containerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
      checkScrollPosition();
    }
  }, [checkScrollPosition]);

  useEffect(() => {
    checkScrollPosition();
    const element = containerRef.current;
    if (!element) return;

    element.addEventListener('scroll', checkScrollPosition);
    return () => element.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);

  return { containerRef, scroll, isAtStart, isAtEnd };
};
