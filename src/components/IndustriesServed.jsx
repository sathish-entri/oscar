import React from 'react';
import { INDUSTRIES } from '../data/productCatalog';
import { Building2, Wind, Flame, Zap, ShieldCheck, GitCommit, Container } from 'lucide-react';

const iconMap = { Building2, Wind, Flame, Zap, ShieldCheck, GitCommit, Container };

const ICON_STYLES = {
  structural:        { bg: '#FEF2F2', color: '#B91C1C' },
  'pressure-vessels':{ bg: '#F0FDF4', color: '#166534' },
  windmill:          { bg: '#FFFBEB', color: '#92400E' },
  'peb-poles':       { bg: '#EFF6FF', color: '#1E40AF' },
  lpg:               { bg: '#FFF7ED', color: '#C2410C' },
  cladding:          { bg: '#FAF5FF', color: '#6B21A8' },
  'spiral-pipe':     { bg: '#F0FDFA', color: '#0F766E' },
};

export default function IndustriesServed() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Industrial Applications</span>
          <h2 className="section-title">Industries We Serve Across India & Overseas</h2>
          <p className="section-subtitle">
            From offshore pressure vessels to high-speed PEB automated lines — OSCAR AUTO FLUX delivers the right flux grade for every critical weld.
          </p>
          <div className="section-rule" />
        </div>

        {/* Photo Gallery Grid */}
        <div className="photo-gallery-grid">
          <div className="gallery-item">
            <img src="./images/windmill_welding.png" alt="Windmill Tower SAW Welding" />
            <div className="gallery-item-overlay">
              <div className="gallery-item-label">Windmill Tower SAW Welding</div>
              <div className="gallery-item-sub">AUTOWELD Gr-4 · -40°C Impact · H₂ &lt; 4mL/100g</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/hero_banner.png" alt="Heavy Structural Fabrication" />
            <div className="gallery-item-overlay">
              <div className="gallery-item-label">Heavy Structural Fabrication</div>
              <div className="gallery-item-sub">AUTOWELD Gr-1 / Gr-3</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/lab_testing.png" alt="ASME QA Batch Testing" />
            <div className="gallery-item-overlay">
              <div className="gallery-item-label">ASME Batch QA Testing</div>
              <div className="gallery-item-sub">XRF Chemical &amp; Mechanical Verification</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/flux_manufacturing.png" alt="Flux Granule Manufacturing" />
            <div className="gallery-item-overlay">
              <div className="gallery-item-label">Agglomeration &amp; Packaging</div>
              <div className="gallery-item-sub">0.2–2.0mm Grain · &lt;0.05% Moisture</div>
            </div>
          </div>
        </div>

        {/* Industry Cards */}
        <div className="industry-cards-grid">
          {INDUSTRIES.map(ind => {
            const Icon = iconMap[ind.icon] || Building2;
            const style = ICON_STYLES[ind.id] || { bg: '#F3F4F6', color: '#374151' };
            return (
              <div key={ind.id} className="industry-card">
                <div className="industry-icon" style={{ background: style.bg }}>
                  <Icon size={24} color={style.color} />
                </div>
                <div className="industry-card-content">
                  <h4>{ind.title}</h4>
                  <p>{ind.description}</p>
                  {ind.recommendedGrades.map((g, i) => (
                    <span key={i} className="industry-grade-tag">{g}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
