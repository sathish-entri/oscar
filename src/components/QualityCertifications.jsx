import React from 'react';
import { COMPANY_INFO } from '../data/productCatalog';
import { Award, TestTube, Cpu, FlaskConical, BarChart3, Package } from 'lucide-react';

const QA_STEPS = [
  { title: 'XRF Mineral Raw Testing', desc: 'Chemical spectrograph analysis of all incoming fluorspar, alumina, silica, and titanate minerals.', Icon: TestTube },
  { title: 'Computer Controlled Dosing', desc: 'Automated batching with ±0.5% weight accuracy to maintain exact Basicity Index targets.', Icon: Cpu },
  { title: 'High-Homogeneity Dry Blending', desc: 'Specialized mixing ensures uniform particle dispersion prior to liquid binder addition.', Icon: BarChart3 },
  { title: 'Agglomeration (Wet Granulation)', desc: 'Silicate binder granulation forms spherical, dust-free flux grains with consistent size distribution.', Icon: FlaskConical },
  { title: 'Low-Temp Sintering (500–600°C)', desc: 'Controlled baking preserves mineral reactivity while guaranteeing <0.05% free moisture.', Icon: Cpu },
  { title: 'Precision Sieve Classification', desc: 'Screening for target granulometry (0.2–2.0mm) ensuring consistent bulk density and arc behaviour.', Icon: BarChart3 },
  { title: 'ASME Sec II C Batch QA & Bagging', desc: 'All-weld metal mechanical testing before moisture-proof HDPE (25 kg) bag packaging and dispatch.', Icon: Package },
];

export default function QualityCertifications() {
  return (
    <section id="quality" className="quality-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag" style={{ background: 'rgba(185,28,28,0.15)', borderColor: 'rgba(185,28,28,0.3)', color: '#F87171' }}>
            Uncompromising Quality
          </span>
          <h2 className="section-title">ISO 9001:2015 · ASME Sec II C Compliance</h2>
          <p className="section-subtitle">
            Every batch undergoes rigorous laboratory testing to ensure zero porosity, ultra-low diffusible hydrogen, and consistent slag detachment.
          </p>
          <div className="section-rule" />
        </div>

        {/* Cert Badges */}
        <div className="cert-grid">
          {COMPANY_INFO.certifications.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon"><Award size={24} color="#F87171" /></div>
              <div>
                <div className="cert-name">{cert}</div>
                <div className="cert-sub">Certified Quality Standard</div>
              </div>
            </div>
          ))}
        </div>

        {/* QA Steps */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--white)', fontSize: '1.45rem', fontWeight: 800 }}>
            7-Step Quality-Controlled Manufacturing Process
          </h3>
        </div>
        <div className="qa-steps-grid">
          {QA_STEPS.map((step, i) => (
            <div key={i} className="qa-step">
              <div className="qa-step-num">{i + 1}</div>
              <div>
                <div className="qa-step-title">{step.title}</div>
                <div className="qa-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
