import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function BasicityCalculator() {
  const [vals, setVals] = useState({ cao: 10, mgo: 8, caf2: 12, mno: 6, sio2: 16, al2o3: 42, tio2: 18 });
  const set = (k) => (e) => setVals(v => ({ ...v, [k]: parseFloat(e.target.value) || 0 }));

  const num = vals.cao + vals.mgo + vals.caf2 + 0.5 * vals.mno;
  const den = vals.sio2 + 0.5 * (vals.al2o3 + vals.tio2);
  const bi = den > 0 ? (num / den) : 0;
  const biStr = bi.toFixed(2);

  const classify = (b) => {
    if (b < 0.9) return { type: 'Acidic Aluminate-Rutile', color: '#B91C1C', bg: '#FEF2F2', border: 'rgba(185,28,28,0.2)', grade: 'AUTOWELD Gr-1 or Gr-5' };
    if (b < 1.2) return { type: 'Neutral Balanced', color: '#1E40AF', bg: '#EFF6FF', border: 'rgba(30,64,175,0.2)', grade: 'AUTOWELD Gr-2, Gr-3, or Gr-7SP' };
    if (b < 2.0) return { type: 'Basic Low-Hydrogen', color: '#166534', bg: '#F0FDF4', border: 'rgba(22,101,52,0.2)', grade: 'AUTOWELD Gr-4' };
    return { type: 'High-Basic Cladding', color: '#6B21A8', bg: '#FAF5FF', border: 'rgba(107,33,168,0.2)', grade: 'AUTOWELD Gr-6' };
  };

  const cls = classify(bi);

  const inputs = [
    { key: 'cao', label: 'CaO (Calcium Oxide)' },
    { key: 'mgo', label: 'MgO (Magnesia)' },
    { key: 'caf2', label: 'CaF₂ (Fluorspar)' },
    { key: 'mno', label: 'MnO (Manganese Oxide)' },
    { key: 'sio2', label: 'SiO₂ (Silica)' },
    { key: 'al2o3', label: 'Al₂O₃ (Alumina)' },
    { key: 'tio2', label: 'TiO₂ (Titanium Dioxide)' },
  ];

  return (
    <section id="calculator" className="calculator-section">
      <div className="calc-bg-image" />
      <div className="calc-bg-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section heading on dark background */}
        <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
          <span className="section-tag" style={{ background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(14,165,233,0.35)', color: '#38BDF8' }}>
            Interactive Engineering Tool
          </span>
          <h2 className="section-title" style={{ color: '#fff' }}>Basicity Index (BI) Calculator</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Enter oxide percentages from XRF spectrograph data to calculate the Boniszewski Basicity Index and identify the optimal AUTOWELD flux grade.
          </p>
          <div className="section-rule" />
        </div>

        <div className="calc-card">
          <div className="calc-header">
            <div className="calc-icon-wrap"><Calculator size={26} color="white" /></div>
            <div>
              <div className="calc-title">Boniszewski Formula</div>
              <div className="calc-subtitle">
                BI = (CaO + MgO + CaF₂ + 0.5·MnO) ÷ (SiO₂ + 0.5·(Al₂O₃ + TiO₂))
              </div>
            </div>
          </div>

          <div className="calc-grid">
            {inputs.map(inp => (
              <div key={inp.key} className="calc-input-group">
                <label>{inp.label} (%)</label>
                <input type="number" min="0" max="100" step="0.5" value={vals[inp.key]} onChange={set(inp.key)} />
              </div>
            ))}
          </div>

          <div className="calc-result" style={{ background: cls.bg, borderColor: cls.border }}>
            <div className="calc-result-label">Calculated Basicity Index</div>
            <div className="calc-result-value" style={{ color: cls.color }}>{biStr}</div>
            <div>
              <span className="calc-result-type-badge" style={{ background: cls.bg, border: `1px solid ${cls.border}`, color: cls.color }}>
                {cls.type}
              </span>
            </div>
            <div className="calc-result-grade">
              Recommended Grade: <strong>{cls.grade}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
