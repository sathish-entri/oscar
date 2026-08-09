import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, ChevronDown, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';
import { AnimatedCounter } from '../hooks/useAnimations';

export default function HeroSection({ onExploreProducts, onOpenRfq }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-clean">
      {/* Full-width background photo */}
      <div className="hero-clean-bg" />
      {/* Lighter gradient — shows more of the image like reference */}
      <div className="hero-clean-overlay" />
      {/* Thin blue top accent line */}
      <div className={`hero-clean-accent ${loaded ? 'hero-clean-accent-in' : ''}`} />

      {/* Main content — bottom-left anchored */}
      <div className="container hero-clean-body">
        <div className={`hero-clean-content ${loaded ? 'hero-clean-in' : ''}`}>

          {/* Eyebrow badge */}
          <div className="hero-clean-badge">
            <ShieldCheck size={13} />
            <span>ISO 9001:2015 · BHEL Approved Manufacturer</span>
          </div>

          {/* Headline — clean, readable, proportional */}
          <h1 className="hero-clean-title">
            Creating The Best<br />
            <span className="hero-clean-highlight">Welding Experience</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-clean-sub">
            Pioneering High-Efficiency Agglomerated SAW Fluxes for{' '}
            <strong>Windmill Towers</strong>, <strong>Pressure Vessels</strong>,
            Pipe Mills &amp; Heavy Steel Fabrication.
          </p>

          {/* CTA row */}
          <div className="hero-clean-actions">
            <button className="btn btn-primary-red" onClick={onExploreProducts}>
              Explore AUTOWELD Fluxes <ArrowRight size={16} />
            </button>
            <button className="btn hero-clean-ghost" onClick={onOpenRfq}>
              Request Datasheet
            </button>
          </div>

          {/* Trust chips */}
          <div className="hero-clean-chips">
            {['BHEL Approved', 'L&T Qualified', 'AWS A5.17/A5.23', 'ASME Sec II C'].map((b, i) => (
              <span key={i} className="hero-clean-chip">{b}</span>
            ))}
          </div>
        </div>

        {/* Right side — compact stats card (desktop only) */}
        <div className={`hero-clean-stats-card ${loaded ? 'hero-stats-card-in' : ''}`}>
          {COMPANY_INFO.stats.map((s, i) => {
            const numPart = parseInt(s.value) || 0;
            const suffixPart = s.value.replace(/[0-9]/g, '');
            return (
              <div key={i} className="hero-stats-card-item">
                <span className="hero-stats-card-num">
                  {loaded
                    ? <AnimatedCounter end={numPart} suffix={suffixPart} duration={1800} />
                    : s.value
                  }
                </span>
                <span className="hero-stats-card-lbl">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`hero-clean-scroll ${loaded ? 'hero-clean-scroll-in' : ''}`}
        onClick={onExploreProducts}
        role="button"
        aria-label="Scroll to products"
      >
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
