import React, { useState } from 'react';
import Header from './components/Header';
import IndustriesServed from './components/IndustriesServed';
import ProductSelector from './components/ProductSelector';
import ProductModal from './components/ProductModal';
import QualityCertifications from './components/QualityCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { FLUX_GRADES } from './data/productCatalog';

const MARQUEE_ITEMS = [
  '⚡ AUTOWELD Gr-4 · Windmill Towers · -40°C Impact',
  '🔬 ASME Sec II C Batch Tested',
  '✅ ISO 9001:2015 Certified',
  '🏭 BHEL & L&T Approved',
  '⚡ AUTOWELD Gr-3 · PEB High Speed Welding >1.5 m/min',
  '🔬 AWS A5.17 & AWS A5.23 Compliant',
  '✅ Low Hydrogen H4R · <4mL/100g',
  '🏭 SAW Flux Specialists Since 2010',
  '⚡ AUTOWELD Gr-6 · SS & Alloy Overlay Cladding',
  '🔬 7 Specialized Agglomerated Grades',
];

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [rfqGrade, setRfqGrade] = useState(null);

  const handleOpenRfq = (grade = null) => {
    setRfqGrade(grade);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectGradeById = (gradeName) => {
    const g = FLUX_GRADES.find(f => f.name === gradeName);
    if (g) setSelectedGrade(g);
  };

  return (
    <div style={{ background: 'var(--navy)' }}>
      <Header
        onOpenRfq={() => handleOpenRfq(null)}
        onSelectGradeById={handleSelectGradeById}
      />
      <main>
        {/* Industries We Serve as the main front page section */}
        <IndustriesServed />

        {/* Scrolling Marquee Strip */}
        <div className="marquee-strip">
          <div className="marquee-inner">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">{item}</span>
            ))}
          </div>
        </div>

        <ProductSelector onSelectGrade={(grade) => setSelectedGrade(grade)} />

        <hr className="section-divider" />

        <QualityCertifications />

        <hr className="section-divider" />

        <ContactSection
          selectedRfqGrade={rfqGrade}
          onCloseRfq={() => setRfqGrade(null)}
        />
      </main>

      <Footer onSelectGrade={(grade) => setSelectedGrade(grade)} />

      {selectedGrade && (
        <ProductModal
          grade={selectedGrade}
          onClose={() => setSelectedGrade(null)}
          onOpenRfq={(grade) => handleOpenRfq(grade)}
        />
      )}
    </div>
  );
}
