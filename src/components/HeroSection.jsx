import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';

export default function HeroSection({ onExploreProducts, onOpenRfq }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-bg-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-pill-tag">
            <ShieldCheck size={14} /> ISO 9001:2015 &amp; BHEL Approved Manufacturer
          </div>

          <h1 className="hero-main-title">
            Creating The Best<br />
            <span className="hero-highlight">Welding Experience</span>
          </h1>

          <p className="hero-lead-text">
            Pioneering High-Efficiency Agglomerated SAW Fluxes for Windmill Towers, Pressure Vessels, Pipe Mills &amp; Heavy Steel Fabrication across India and overseas.
          </p>

          <div className="hero-action-buttons">
            <button className="btn btn-primary-red" onClick={onExploreProducts}>
              Explore AUTOWELD Fluxes <ArrowRight size={18} />
            </button>
            <button className="btn btn-ghost-light" onClick={onOpenRfq}>
              Request Technical Datasheet
            </button>
          </div>
        </div>

        {/* Ador-style minimal geometric wireframe outline */}
        <div className="hero-wireframe-decoration">
          <svg width="340" height="340" viewBox="0 0 200 200" fill="none" opacity="0.25">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="65" stroke="#E11D48" strokeWidth="2" />
            <path d="M100 10 L100 190 M10 100 L190 100" stroke="white" strokeWidth="1" />
            <polygon points="100,35 156,135 44,135" stroke="#E11D48" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Clean stats strip at bottom of hero */}
      <div className="hero-bottom-bar">
        <div className="container hero-stats-inline">
          {COMPANY_INFO.stats.map((s, i) => (
            <div key={i} className="inline-stat-item">
              <span className="inline-stat-num">{s.value}</span>
              <span className="inline-stat-txt">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
