import React from 'react';
import { X, CheckCircle, ShieldAlert, Send } from 'lucide-react';

export default function ProductModal({ grade, onClose, onOpenRfq }) {
  if (!grade) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-header-tag">ASME Sec II C Tested · Technical Datasheet</div>
            <h2 className="modal-title">{grade.name}</h2>
            <div className="modal-sub">{grade.awsClass}</div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal"><X size={24} /></button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: '0.92rem' }}>
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
              <div key={i} className="modal-spec-cell">
                <div className="modal-spec-item-label">{s.label}</div>
                <div className="modal-spec-item-value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Chemistry Table */}
          <div className="tech-section-title">Typical Chemical Composition (%)</div>
          <div className="table-responsive">
            <table className="tech-table">
              <thead><tr>{Object.keys(grade.chemistry).map((k, i) => <th key={i}>{k}</th>)}</tr></thead>
              <tbody><tr>{Object.values(grade.chemistry).map((v, i) => <td key={i}>{v}</td>)}</tr></tbody>
            </table>
          </div>

          {/* Mechanical Properties Table */}
          <div className="tech-section-title">All-Weld Metal Mechanical Properties</div>
          <div className="table-responsive" style={{ marginBottom: '1.75rem' }}>
            <table className="tech-table">
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
                    <td style={{ fontWeight: 600, width: '45%', color: 'var(--text-dark)' }}>{lbl}</td>
                    <td style={{ fontWeight: 700, color: 'var(--red-accent)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Applications */}
          <div className="tech-section-title">Recommended Applications</div>
          <div className="app-chips-grid">
            {grade.applications.map((a, i) => (
              <div key={i} className="app-chip">
                <CheckCircle size={14} style={{ color: 'var(--red-accent)', shrink: 0 }} /> {a}
              </div>
            ))}
          </div>

          {/* Rebaking */}
          <div className="rebake-warn">
            <div className="rebake-warn-title"><ShieldAlert size={16} /> Storage &amp; Re-baking</div>
            <p>{grade.rebaking}</p>
          </div>

          {/* Footer Actions */}
          <div className="modal-actions-bar">
            <button className="btn btn-outline-dark" onClick={onClose}>Close</button>
            <button className="btn btn-primary-red" onClick={() => { onClose(); onOpenRfq(grade); }}>
              <Send size={15} /> Request Quote / Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
