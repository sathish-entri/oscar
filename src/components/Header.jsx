import React, { useState } from 'react';
import { ChevronDown, FileText, Menu, X, MessageSquare, ShieldCheck, Home, Layers, Factory, Award, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';

const gradeList = [
  'AUTOWELD Gr-1',
  'AUTOWELD Gr-2',
  'AUTOWELD Gr-3',
  'AUTOWELD Gr-4',
  'AUTOWELD Gr-5',
  'AUTOWELD Gr-6',
  'AUTOWELD Gr-7SP'
];

export default function Header({ onOpenRfq, onSelectGradeById }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGradesOpen, setMobileGradesOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="main-header-wrap">
      <div className="main-header">
        <div className="container header-inner">
          {/* Logo */}
          <a href="#hero" className="brand-logo" onClick={closeMobile}>
            <video
              src="./logo.mp4"
              className="header-logo-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="OSCAR AUTO FLUX Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li>
                <a href="#hero" className="nav-link nav-link-active">
                  Welding <ChevronDown size={14}/>
                </a>
              </li>
              <li className="nav-item" style={{ position: 'relative' }}>
                <a href="#products" className="nav-link">AUTOWELD Fluxes <ChevronDown size={14}/></a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-label">7 Agglomerated Grades</div>
                  {gradeList.map((g, i) => (
                    <a key={i} href="#products" className="nav-dropdown-item"
                      onClick={() => { onSelectGradeById && onSelectGradeById(g); }}>
                      <span className="dot-indicator" />
                      {g}
                    </a>
                  ))}
                </div>
              </li>
              <li><a href="#industries" className="nav-link">Industries</a></li>
              <li><a href="#quality" className="nav-link">Quality &amp; QA</a></li>
              <li><a href="#contact" className="nav-link">Contact Us</a></li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="btn btn-red-pill header-rfq-btn" onClick={onOpenRfq}>
              <FileText size={15} /><span>Get Quote</span>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} color="#FFFFFF" /> : <Menu size={22} color="#FFFFFF" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Overlay */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobile}>
          <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <video
                  src="./logo.mp4"
                  className="header-logo-video header-logo-video--drawer"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="OSCAR AUTO FLUX Logo"
                />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff', fontSize: '0.95rem', letterSpacing: '0.04em' }}>
                  OSCAR AUTO FLUX
                </span>
              </div>
              <button className="mobile-drawer-close" onClick={closeMobile} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <a href="#hero" className="mobile-menu-item" onClick={closeMobile}>
                <Home size={18} className="mobile-menu-icon" />
                <span>Home</span>
              </a>

              <div className="mobile-menu-accordion">
                <button
                  className="mobile-menu-item mobile-menu-accordion-btn"
                  onClick={() => setMobileGradesOpen(!mobileGradesOpen)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Layers size={18} className="mobile-menu-icon" />
                    <span>AUTOWELD Fluxes (7 Grades)</span>
                  </div>
                  <ChevronDown size={16} style={{ transform: mobileGradesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>

                {mobileGradesOpen && (
                  <div className="mobile-grades-sublist">
                    {gradeList.map((g, i) => (
                      <a
                        key={i}
                        href="#products"
                        className="mobile-grade-item"
                        onClick={() => {
                          if (onSelectGradeById) onSelectGradeById(g);
                          closeMobile();
                        }}
                      >
                        <span className="dot-indicator" /> {g}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#industries" className="mobile-menu-item" onClick={closeMobile}>
                <Factory size={18} className="mobile-menu-icon" />
                <span>Industries Served</span>
              </a>
              <a href="#quality" className="mobile-menu-item" onClick={closeMobile}>
                <Award size={18} className="mobile-menu-icon" />
                <span>Quality &amp; QA Process</span>
              </a>
              <a href="#contact" className="mobile-menu-item" onClick={closeMobile}>
                <Phone size={18} className="mobile-menu-icon" />
                <span>Contact Factory</span>
              </a>

              <div className="mobile-drawer-cta">
                <button
                  className="btn btn-primary-red"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => { onOpenRfq(); closeMobile(); }}
                >
                  <FileText size={16} /> Request Quote / Sample Bag
                </button>
                <a
                  href={`https://wa.me/918667753591?text=Hello,%20I%20want%20to%20enquire%20about%20Oscar%20Auto%20Flux.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost-dark"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>

              <div className="mobile-drawer-footer">
                <ShieldCheck size={14} style={{ color: 'var(--red-accent)' }} /> ISO 9001:2015 &amp; BHEL Approved Plant
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
