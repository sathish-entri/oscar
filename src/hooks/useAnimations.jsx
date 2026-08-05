import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — triggers CSS entrance animation when element enters viewport.
 * Returns a ref to attach to any element, and a boolean `isVisible`.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * AnimatedSection — wraps children with scroll-triggered CSS class.
 * variant: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
 */
export function AnimatedSection({ children, className = '', variant = 'fadeUp', delay = 0, style = {} }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`anim-section ${variant} ${isVisible ? 'anim-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedLetters — splits text into individual <span> per character and staggers entrance.
 */
export function AnimatedLetters({ text, className = '', delay = 0, stagger = 40, tag: Tag = 'span' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <Tag ref={ref} className={`anim-letters-wrap ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`anim-letter ${isVisible ? 'anim-letter-visible' : ''}`}
          style={{
            transitionDelay: `${delay + i * stagger}ms`,
            display: char === ' ' ? 'inline' : 'inline-block',
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
 * AnimatedCounter — counts up number when visible.
 */
export function AnimatedCounter({ end, suffix = '', duration = 1800 }) {
  const { ref, isVisible } = useScrollReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
