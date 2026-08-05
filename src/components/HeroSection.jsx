import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';
import { AnimatedCounter } from '../hooks/useAnimations';

/* Split headline into animated letter spans — hero-specific inline version */
function HeroLetters({ text, delay = 0, className = '' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`hero-letter ${visible ? 'hero-letter-in' : ''}`}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            transitionDelay: `${delay + i * 45}ms`,
          }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection({ onExploreProducts, onOpenRfq }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-bg-overlay" />

      <div className={`container hero-container ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-content">

          {/* Pill Tag */}
          <div className={`hero-pill-tag ${loaded ? 'hero-tag-in' : ''}`}>
            <ShieldCheck size={14} /> ISO 9001:2015 &amp; BHEL Approved Manufacturer
          </div>

          {/* Animated Title */}
          <h1 className="hero-main-title">
            <span className="hero-line-1">
              <HeroLetters text="Creating The Best" delay={200} />
            </span>
            <br />
            <span className="hero-line-2 hero-highlight">
              <HeroLetters text="Welding Experience" delay={600} />
            </span>
          </h1>

          {/* Lead text fades in */}
          <p className={`hero-lead-text ${loaded ? 'hero-lead-in' : ''}`}>
            Pioneering High-Efficiency Agglomerated SAW Fluxes for Windmill Towers,
            Pressure Vessels, Pipe Mills &amp; Heavy Steel Fabrication across India and overseas.
          </p>

          {/* CTA Buttons */}
          <div className={`hero-action-buttons ${loaded ? 'hero-btns-in' : ''}`}>
            <button className="btn btn-primary-red" onClick={onExploreProducts}>
              Explore AUTOWELD Fluxes <ArrowRight size={18} />
            </button>
            <button className="btn btn-ghost-light" onClick={onOpenRfq}>
              Request Technical Datasheet
            </button>
          </div>
        </div>

        {/* Animated geometric decoration */}
        <div className={`hero-wireframe-decoration ${loaded ? 'hero-geo-in' : ''}`}>
          <svg width="340" height="340" viewBox="0 0 200 200" fill="none" opacity="0.28">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1.2" strokeDasharray="4 4" className="geo-spin" />
            <circle cx="100" cy="100" r="65" stroke="#E11D48" strokeWidth="2" />
            <path d="M100 10 L100 190 M10 100 L190 100" stroke="white" strokeWidth="0.8" />
            <polygon points="100,35 156,135 44,135" stroke="#E11D48" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="8" fill="#E11D48" />
            <circle cx="100" cy="35" r="3" fill="white" />
            <circle cx="156" cy="135" r="3" fill="white" />
            <circle cx="44" cy="135" r="3" fill="white" />
          </svg>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`hero-bottom-bar ${loaded ? 'hero-stats-in' : ''}`}>
        <div className="container hero-stats-inline">
          {COMPANY_INFO.stats.map((s, i) => (
            <div key={i} className="inline-stat-item">
              <span className="inline-stat-num">
                {loaded
                  ? <AnimatedCounter
                      end={parseInt(s.value) || 0}
                      suffix={s.value.replace(/[0-9]/g, '')}
                      duration={1600}
                    />
                  : s.value
                }
              </span>
              <span className="inline-stat-txt">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
