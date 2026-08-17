import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ onExploreProducts, onOpenRfq }) {
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

      {/* Main hero fold content — aligned left like sample template */}
      <div className="container hero-template-container">
        <div className={`hero-template-content ${loaded ? 'hero-template-in' : ''}`}>
          
          {/* Headline — bold, classic, elegant layout matching sample template */}
          <h1 className="hero-template-title">
            CREATING THE BEST<br />
            WELDING EXPERIENCE
          </h1>

          {/* Thin horizontal line separator matching sample template */}
          <div className="hero-template-divider" />

          {/* Subheadline info matching sample template */}
          <div className="hero-template-subinfo">
            <span className="hero-template-tag">ESTABLISHED 2010 · ISO 9001:2015 &amp; BHEL APPROVED</span>
            <p className="hero-template-desc">
              India's Premier Manufacturer of High-Efficiency Agglomerated Submerged Arc Welding (SAW) Fluxes.
            </p>
          </div>

          {/* Primary CTA button matching sample template style */}
          <div className="hero-template-actions">
            <button className="btn hero-template-btn" onClick={onExploreProducts}>
              Explore AUTOWELD Fluxes <ArrowRight size={18} />
            </button>
            <button className="btn hero-template-btn-ghost" onClick={onOpenRfq}>
              Get Quote <ArrowRight size={18} />
            </button>
          </div>

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
