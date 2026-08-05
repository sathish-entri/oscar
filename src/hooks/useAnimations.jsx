import { useEffect, useRef, useState } from 'react';

/* ── Detect reduced-motion preference ── */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * useScrollReveal — IntersectionObserver-based hook.
 * Works on all devices including mobile.
 * Lower threshold + smaller rootMargin ensures mobile triggers correctly.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced-motion, reveal immediately
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.05,          // low threshold → fires earlier on mobile
        rootMargin: options.rootMargin ?? '0px 0px -20px 0px', // smaller negative rootMargin for mobile
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * AnimatedSection — wraps children with scroll-triggered entrance.
 * variant: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'flipIn'
 */
export function AnimatedSection({ children, className = '', variant = 'fadeUp', delay = 0, style = {}, as: Tag = 'div' }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`anim-section ${variant} ${isVisible ? 'anim-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * AnimatedLetters — staggered per-character entrance with skew/lift.
 */
export function AnimatedLetters({ text, className = '', delay = 0, stagger = 40, tag: Tag = 'span' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <Tag ref={ref} className={`anim-letters-wrap ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`anim-letter ${isVisible ? 'anim-letter-visible' : ''}`}
          style={{
            transitionDelay: `${delay + i * stagger}ms`,
            display: char === ' ' ? 'inline' : 'inline-block',
            willChange: 'transform, opacity',
          }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}

/**
 * AnimatedCounter — smooth count-up animation when element enters viewport.
 */
export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 1600 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (prefersReducedMotion()) { setCount(end); return; }

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/**
 * AnimatedWord — animates whole words instead of letters (better for mobile performance).
 */
export function AnimatedWord({ text, className = '', stagger = 100, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`anim-letters-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`anim-letter ${isVisible ? 'anim-letter-visible' : ''}`}
          style={{
            display: 'inline-block',
            transitionDelay: `${delay + i * stagger}ms`,
            marginRight: i < words.length - 1 ? '0.3em' : 0,
            willChange: 'transform, opacity',
          }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
