import React, { useState } from 'react';
import { FLUX_GRADES } from '../data/productCatalog';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection, AnimatedLetters } from '../hooks/useAnimations';

const FILTERS = [
  { key: 'all', label: 'All 7 Grades' },
  { key: 'acidic', label: 'Acidic' },
  { key: 'neutral', label: 'Neutral' },
  { key: 'basic', label: 'Basic' },
  { key: 'cladding', label: 'High Basic / Cladding' },
];

export default function ProductSelector({ onSelectGrade }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = FLUX_GRADES.filter(g => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'acidic') return g.type.toLowerCase().includes('acidic');
    if (activeFilter === 'neutral') return g.type.toLowerCase().includes('neutral');
    if (activeFilter === 'basic') return g.type.toLowerCase().includes('basic') && !g.type.toLowerCase().includes('high-basic');
    if (activeFilter === 'cladding') return g.type.toLowerCase().includes('high-basic') || g.type.toLowerCase().includes('cladding');
    return true;
  });

  return (
    <section id="products" className="product-section">
      <div className="container">
        <AnimatedSection variant="fadeUp" className="section-title-wrap">
          <span className="section-tag">Complete AUTOWELD Portfolio</span>
          <h2 className="section-title">
            <AnimatedLetters text="7 Specialized SAW Flux Grades" stagger={35} />
          </h2>
          <p className="section-subtitle">
            Engineered with high-purity mineral formulations, controlled granulometry, and consistent Basicity Index for low-hydrogen, crack-free submerged arc welds.
          </p>
          <div className="section-rule" />
        </AnimatedSection>

        <AnimatedSection variant="fadeIn" delay={100} className="filter-bar">
          {FILTERS.map(f => (
            <button key={f.key} className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </AnimatedSection>

        <div className="product-grid">
          {filtered.map((grade, idx) => (
            <AnimatedSection key={grade.id} variant="fadeUp" delay={idx * 80} className="product-card-wrap" style={{ display: 'contents' }}>
              <div className="product-card">
                <div className="product-card-top-bar" />
                <div className="product-card-header">
                  <span className="product-badge">{grade.badge}</span>
                  <h3 className="product-name">{grade.name}</h3>
                  <div className="product-aws">{grade.awsClass}</div>
                </div>
                <div className="product-card-body">
                  <p className="product-desc">{grade.tagline}</p>
                  <div className="spec-pills">
                    <span className="spec-pill">BI: {grade.basicityIndex}</span>
                    <span className="spec-pill">Wire: {grade.wirePairing}</span>
                    <span className="spec-pill">{grade.currentType}</span>
                  </div>
                  <div className="product-apps">
                    <strong>Key Applications</strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                      {grade.applications.slice(0, 2).map((a, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                          <span style={{ color: 'var(--red-accent)', lineHeight: 1.5 }}>›</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="product-card-footer">
                  <span className="product-grain">Grain: {grade.grainSize}</span>
                  <button
                    className="btn btn-outline-dark"
                    style={{ padding: '0.42rem 0.9rem', fontSize: '0.8rem' }}
                    onClick={() => onSelectGrade(grade)}
                  >
                    Datasheet <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
