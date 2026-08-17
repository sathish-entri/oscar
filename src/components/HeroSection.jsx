import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onExploreProducts, onOpenRfq }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-ultra-clean">
      {/* Full-width industrial background image */}
      <div className="hero-ultra-bg" />
      <div className="hero-ultra-overlay" />

      {/* Neat & minimal centered front fold */}
      <div className="container hero-ultra-container">
        <div className={`hero-ultra-content ${loaded ? 'hero-ultra-in' : ''}`}>
          
          <h1 className="hero-ultra-title">
            Creating The Best<br />
            Welding Experience
          </h1>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hero-ultra-scroll ${loaded ? 'hero-ultra-scroll-in' : ''}`}
        onClick={onExploreProducts}
        role="button"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
