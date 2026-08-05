import React, { useState } from 'react';
import { ChevronDown, FileText, Menu, X, MessageSquare, ShieldCheck } from 'lucide-react';
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
            <img src="./logo.png" alt="OSCAR AUTO FLUX" className="header-logo-img" />
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
              {mobileOpen ? <X size={26} color="var(--red-accent)" /> : <Menu size={26} color="var(--slate-dark)" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Overlay */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobile}>
          <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <img src="./logo.png" alt="OSCAR AUTO FLUX" style={{ height: '42px', width: 'auto' }} />
              <button className="mobile-drawer-close" onClick={closeMobile}>
                <X size={24} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <a href="#hero" className="mobile-menu-item" onClick={closeMobile}>
                Home
              </a>

              <div className="mobile-menu-accordion">
                <button
                  className="mobile-menu-item mobile-menu-accordion-btn"
                  onClick={() => setMobileGradesOpen(!mobileGradesOpen)}
                >
                  <span>AUTOWELD Fluxes (7 Grades)</span>
                  <ChevronDown size={18} style={{ transform: mobileGradesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
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
                Industries Served
              </a>
              <a href="#quality" className="mobile-menu-item" onClick={closeMobile}>
                Quality &amp; QA Process
              </a>
              <a href="#contact" className="mobile-menu-item" onClick={closeMobile}>
                Contact Factory
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
