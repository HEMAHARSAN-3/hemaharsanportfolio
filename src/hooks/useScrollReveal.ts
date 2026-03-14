import { useEffect, useRef } from 'react';

/**
 * Lightweight Intersection Observer hook that toggles a `.visible` class
 * on an element when it enters the viewport. Uses GPU-friendly
 * transform: translate3d + opacity animations defined in CSS.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion at the JS level too
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Observe multiple children of a container. Each child with
 * `[data-reveal]` will get `.visible` when it enters viewport.
 */
export function useScrollRevealChildren(
  options: { threshold?: number; rootMargin?: string; staggerDelay?: number } = {}
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', staggerDelay = 80 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const children = container.querySelectorAll('[data-reveal]');

    if (prefersReduced) {
      children.forEach((child) => child.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = parseInt(el.dataset.revealIndex || '0', 10);
            setTimeout(() => el.classList.add('visible'), index * staggerDelay);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerDelay]);

  return containerRef;
}
