import React from 'react';
import { X, CheckCircle, ShieldAlert, Send } from 'lucide-react';

export default function ProductModal({ grade, onClose, onOpenRfq }) {
  if (!grade) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        {/* Dark header */}
        <div className="modal-header">
          <div>
            <div className="modal-header-tag">ASME Sec II C Tested · Technical Datasheet</div>
            <h2 className="modal-title">{grade.name}</h2>
            <div className="modal-sub">{grade.awsClass}</div>
          </div>
          <button className="modal-close" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.92rem' }}>
            {grade.description}
          </p>

          {/* Spec Strip */}
          <div className="modal-spec-strip">
            {[
              { label: 'Basicity Index (BI)', value: grade.basicityIndex },
              { label: 'Flux Type', value: grade.type.split(' ')[0] },
              { label: 'Wire Pairing', value: grade.wirePairing },
              { label: 'Current', value: grade.currentType },
              { label: 'Grain Size', value: grade.grainSize },
              { label: 'Flux:Wire Ratio', value: grade.consumptionRatio },
            ].map((s, i) => (
              <div key={i}>
                <div className="modal-spec-item-label">{s.label}</div>
                <div className="modal-spec-item-value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Chemistry */}
          <div className="tech-section-title">Typical Chemical Composition (%)</div>
          <table className="tech-table">
            <thead><tr>{Object.keys(grade.chemistry).map((k, i) => <th key={i}>{k}</th>)}</tr></thead>
            <tbody><tr>{Object.values(grade.chemistry).map((v, i) => <td key={i}>{v}</td>)}</tr></tbody>
          </table>

          {/* Mechanical */}
          <div className="tech-section-title">All-Weld Metal Mechanical Properties</div>
          <table className="tech-table" style={{ marginBottom: '2rem' }}>
            <tbody>
              {[
                ['Tensile Strength (UTS)', grade.mechanicalProperties.tensileStrength],
                ['Yield Strength (0.2%)', grade.mechanicalProperties.yieldStrength],
                ['Elongation', grade.mechanicalProperties.elongation],
                ['Charpy Impact', grade.mechanicalProperties.charpyImpact],
                ...(grade.mechanicalProperties.diffusibleHydrogen ? [['Diffusible Hydrogen', grade.mechanicalProperties.diffusibleHydrogen]] : []),
                ...(grade.mechanicalProperties.dilution ? [['Dilution (single layer)', grade.mechanicalProperties.dilution]] : []),
              ].map(([lbl, val], i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, width: '42%', color: 'var(--charcoal)' }}>{lbl}</td>
                  <td style={{ fontWeight: 700, color: 'var(--red)' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Applications */}
          <div className="tech-section-title">Recommended Applications</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.65rem', marginBottom: '2rem' }}>
            {grade.applications.map((a, i) => (
              <div key={i} className="app-chip">
                <CheckCircle size={14} style={{ color: 'var(--navy)', shrink: 0 }} /> {a}
              </div>
            ))}
          </div>

          {/* Rebaking */}
          <div className="rebake-warn">
            <div className="rebake-warn-title"><ShieldAlert size={16} /> Storage & Re-baking</div>
            <p>{grade.rebaking}</p>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button className="btn btn-outline-navy" onClick={onClose}>Close</button>
            <button className="btn btn-navy" onClick={() => { onClose(); onOpenRfq(grade); }}>
              <Send size={15} /> Request Quote / Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
