import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onExploreProducts }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-template-section">
      {/* Full-width photography background */}
      <div className="hero-template-bg" />
      <div className="hero-template-overlay" />

      {/* Main hero fold content — headline ONLY */}
      <div className="container hero-template-container">
        <div className={`hero-template-content ${loaded ? 'hero-template-in' : ''}`}>
          
          <h1 className="hero-template-title">
            CREATING THE BEST<br />
            WELDING EXPERIENCE
          </h1>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hero-template-scroll ${loaded ? 'hero-template-scroll-in' : ''}`}
        onClick={onExploreProducts}
        role="button"
        aria-label="Scroll to content"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
