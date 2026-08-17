import React from 'react';
import { INDUSTRIES } from '../data/productCatalog';
import { Building2, Wind, Flame, Zap, ShieldCheck, GitCommit, Container } from 'lucide-react';
import { AnimatedSection, AnimatedLetters } from '../hooks/useAnimations';

import galleryImg1 from '../assets/images/gallery_img1.jpg';
import galleryImg2 from '../assets/images/gallery_img2.jpg';
import galleryImg3 from '../assets/images/gallery_img3.jpg';

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
        <AnimatedSection variant="fadeUp" className="section-title-wrap">
          <span className="section-tag">SUBMERGED ARC WELDING FLUXES</span>
          <h1 className="section-title">
            <AnimatedLetters text="Industries We Serve" stagger={32} />
          </h1>
          <p className="section-subtitle">
            High-performance agglomerated SAW fluxes engineered for critical industrial fabrications.
          </p>
          <div className="section-rule" />
        </AnimatedSection>

        {/* Photo Gallery Grid */}
        <AnimatedSection variant="fadeUp" delay={100}>
          <div className="photo-gallery-grid">

            {/* First item: VIDEO — mandatory first position */}
            <div className="gallery-item gallery-item-video">
              <video
                src="./gallery_video.mov"
                autoPlay
                muted
                loop
                playsInline
                className="gallery-video"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-label">Welding Operations</div>
                <div className="gallery-item-sub">OSCAR AUTO FLUX — Live Process</div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="gallery-item">
              <img src={galleryImg1} alt="Gallery Image 1" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-label">Headline Coming Soon</div>
                <div className="gallery-item-sub">AUTOWELD Grade — Description</div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="gallery-item">
              <img src={galleryImg2} alt="Gallery Image 2" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-label">Headline Coming Soon</div>
                <div className="gallery-item-sub">AUTOWELD Grade — Description</div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="gallery-item">
              <img src={galleryImg3} alt="Gallery Image 3" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-label">Headline Coming Soon</div>
                <div className="gallery-item-sub">AUTOWELD Grade — Description</div>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Industry Cards */}
        <div className="industry-cards-grid">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Building2;
            const style = ICON_STYLES[ind.id] || { bg: '#F3F4F6', color: '#374151' };
            return (
              <AnimatedSection key={ind.id} variant={idx % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={idx * 80}>
                <div className="industry-card">
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
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
