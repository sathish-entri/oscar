import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';
import { AnimatedCounter } from '../hooks/useAnimations';

/* ── Floating Spark Particles ── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 6,
    color: i % 3 === 0 ? '#E11D48' : i % 3 === 1 ? '#fff' : '#FB923C',
  }));

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Letter-by-letter animation ── */
function HeroLetters({ text, delay = 0, className = '' }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`hero-letter ${visible ? 'hero-letter-in' : ''}`}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            transitionDelay: `${delay + i * 42}ms`,
            willChange: 'transform, opacity',
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
      <Particles />

      {/* Animated red accent border line */}
      <div className={`hero-accent-line ${loaded ? 'hero-accent-line-in' : ''}`} />

      <div className={`container hero-container ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-content">

          {/* ISO Pill */}
          <div className={`hero-pill-tag ${loaded ? 'hero-tag-in' : ''}`}>
            <ShieldCheck size={14} />
            <span>ISO 9001:2015 &amp; BHEL Approved Manufacturer</span>
          </div>

          {/* Main Title — letter animation */}
          <h1 className="hero-main-title">
            <span className="hero-line-1">
              <HeroLetters text="Creating The Best" delay={200} />
            </span>
            <br />
            <span className="hero-line-2 hero-highlight">
              <HeroLetters text="Welding Experience" delay={550} />
            </span>
          </h1>

          {/* Lead text */}
          <p className={`hero-lead-text ${loaded ? 'hero-lead-in' : ''}`}>
            Pioneering High-Efficiency Agglomerated SAW Fluxes for <strong>Windmill Towers</strong>,{' '}
            <strong>Pressure Vessels</strong>, Pipe Mills &amp; Heavy Steel Fabrication across India and overseas.
          </p>

          {/* Action Buttons */}
          <div className={`hero-action-buttons ${loaded ? 'hero-btns-in' : ''}`}>
            <button className="btn btn-primary-red hero-btn-glow" onClick={onExploreProducts}>
              Explore AUTOWELD Fluxes <ArrowRight size={18} />
            </button>
            <button className="btn btn-ghost-light" onClick={onOpenRfq}>
              Request Technical Datasheet
            </button>
          </div>

          {/* Trust badges */}
          <div className={`hero-trust-row ${loaded ? 'hero-trust-in' : ''}`}>
            {['BHEL Approved', 'L&T Qualified', 'AWS A5.17/A5.23', 'ASME Sec II C'].map((b, i) => (
              <span key={i} className="hero-trust-badge">{b}</span>
            ))}
          </div>
        </div>

        {/* Desktop geometric graphic */}
        <div className={`hero-wireframe-decoration ${loaded ? 'hero-geo-in' : ''}`}>
          <svg width="360" height="360" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" className="geo-spin" />
            <circle cx="100" cy="100" r="72" stroke="rgba(225,29,72,0.4)" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <path d="M100 10 L100 190 M10 100 L190 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <polygon points="100,30 162,140 38,140" stroke="#E11D48" strokeWidth="1.5" fill="rgba(225,29,72,0.04)" />
            {/* Glowing center dot */}
            <circle cx="100" cy="100" r="7" fill="#E11D48" opacity="0.9">
              <animate attributeName="r" values="7;11;7" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2.4s" repeatCount="indefinite" />
            </circle>
            {/* Corner dots */}
            {[[100,30],[162,140],[38,140]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`hero-bottom-bar ${loaded ? 'hero-stats-in' : ''}`}>
        <div className="container hero-stats-inline">
          {COMPANY_INFO.stats.map((s, i) => {
            const numPart = parseInt(s.value) || 0;
            const suffixPart = s.value.replace(/[0-9]/g, '');
            return (
              <div key={i} className="inline-stat-item">
                <span className="inline-stat-num">
                  {loaded
                    ? <AnimatedCounter end={numPart} suffix={suffixPart} duration={1800} />
                    : s.value
                  }
                </span>
                <span className="inline-stat-txt">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hero-scroll-hint ${loaded ? 'hero-scroll-in' : ''}`} onClick={onExploreProducts}>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
