import React, { useState } from 'react';
import { ChevronDown, FileText, Menu, X, Flame } from 'lucide-react';
import { COMPANY_INFO } from '../data/productCatalog';

const gradeList = ['AUTOWELD Gr-1','AUTOWELD Gr-2','AUTOWELD Gr-3','AUTOWELD Gr-4','AUTOWELD Gr-5','AUTOWELD Gr-6','AUTOWELD Gr-7SP'];

export default function Header({ onOpenRfq, onSelectGradeById }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="main-header-wrap">
      <div className="main-header">
        <div className="container header-inner">
          {/* Logo - Borderless Official Logo */}
          <a href="#hero" className="brand-logo">
            <img src="/logo_clean.png" alt="OSCAR AUTO FLUX" className="header-logo-img" />
          </a>

          {/* Navigation */}
          <nav>
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
                      onClick={() => onSelectGradeById && onSelectGradeById(g)}>
                      <span className="dot-indicator" />
                      {g}
                    </a>
                  ))}
                </div>
              </li>
              <li><a href="#industries" className="nav-link">Industries</a></li>
              <li><a href="#quality" className="nav-link">Quality & QA</a></li>
              <li><a href="#contact" className="nav-link">Contact Us</a></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="header-actions">
            <button className="btn btn-red-pill" onClick={onOpenRfq}>
              <FileText size={15} /><span>Get Quote</span>
            </button>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
