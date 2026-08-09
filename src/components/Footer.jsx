import React from 'react';
import { COMPANY_INFO, FLUX_GRADES } from '../data/productCatalog';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

export default function Footer({ onSelectGrade }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <video
                src="./logo.mp4"
                className="footer-logo-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="OSCAR AUTO FLUX Logo"
              />
            </div>
            <p className="footer-desc">India's premier specialist manufacturer of high-purity Agglomerated Submerged Arc Welding (SAW) Fluxes since 2010. Serving windmill, structural, pipeline and pressure vessel industries.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--red-accent)', fontWeight: 700 }}>
              <Award size={15} /> ISO 9001:2015 · BHEL Approved
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="footer-col-title">AUTOWELD Grades</div>
            {FLUX_GRADES.map(g => (
              <a key={g.id} href="#products" className="footer-link" onClick={() => onSelectGrade(g)}>
                {g.name}
                <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.4)', marginLeft: '0.4rem' }}>({g.awsClass.split(' ')[2] || 'SAW'})</span>
              </a>
            ))}
          </div>

          {/* Standards */}
          <div>
            <div className="footer-col-title">Standards & Compliance</div>
            {['AWS A5.17 / ASME SFA 5.17','AWS A5.23 / ASME SFA 5.23','EN ISO 14174 Specification','ASME Sec II C 2023 Batch Tested','BHEL & L&T Quality Approved','Low Hydrogen H4R Compliant'].map((s, i) => (
              <div key={i} className="footer-link" style={{ cursor: 'default' }}>• {s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Factory Contact</div>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.9rem', fontSize: '0.85rem' }}>
              <MapPin size={16} style={{ color: 'var(--red-accent)', shrink: 0, marginTop: 2 }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{COMPANY_INFO.address}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', alignItems: 'center' }}>
              <Phone size={15} style={{ color: 'var(--red-accent)' }} />
              <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--white)', fontSize: '0.9rem', fontWeight: 700 }}>{COMPANY_INFO.phone}</a>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', alignItems: 'center' }}>
              <Mail size={15} style={{ color: 'var(--red-accent)' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{COMPANY_INFO.email}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem' }}>
              Division: <strong style={{ color: 'var(--white)' }}>{COMPANY_INFO.businessManager}</strong>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} OSCAR AUTO FLUX (Oscar Auto Weld). All rights reserved.</span>
          <span>Designed for Excellence in Submerged Arc Welding.</span>
        </div>
      </div>
    </footer>
  );
}
