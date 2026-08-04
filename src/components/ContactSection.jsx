import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO, FLUX_GRADES } from '../data/productCatalog';

export default function ContactSection({ selectedRfqGrade }) {
  const [grade, setGrade] = useState(selectedRfqGrade ? selectedRfqGrade.name : 'AUTOWELD Gr-1');
  const [quantity, setQuantity] = useState('5 Tons');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Direct Factory Contact</span>
          <h2 className="section-title">Request Quote &amp; Technical Support</h2>
          <p className="section-subtitle">
            Get instant pricing, test certificates, or order sample bags directly from our manufacturing plant in Tiruppur, Tamil Nadu.
          </p>
          <div className="section-rule" />
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card">
            <div className="contact-person">
              <div className="contact-avatar">
                <Building2 size={24} color="#FFFFFF" />
              </div>
              <div>
                <div className="contact-person-name">{COMPANY_INFO.businessManager}</div>
                <div className="contact-person-title">{COMPANY_INFO.title} · {COMPANY_INFO.name}</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin size={18} className="contact-detail-icon" />
              <div>
                <div className="contact-detail-label">Manufacturing Plant</div>
                <div className="contact-detail-value">{COMPANY_INFO.address}</div>
              </div>
            </div>
            <div className="contact-detail-item">
              <Phone size={18} className="contact-detail-icon" />
              <div>
                <div className="contact-detail-label">Phone / WhatsApp</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="contact-detail-value" style={{ color: 'var(--red-accent)' }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
            <div className="contact-detail-item">
              <Mail size={18} className="contact-detail-icon" />
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">{COMPANY_INFO.email}</div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a href={`https://wa.me/918667753591?text=Hello,%20I%20want%20to%20enquire%20about%20Oscar%20Auto%20Flux.`}
                target="_blank" rel="noreferrer"
                className="btn btn-red-pill" style={{ width: '100%', justifyContent: 'center' }}>
                <MessageSquare size={17} /> WhatsApp Instant Inquiry
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {COMPANY_INFO.certifications.map((cert, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--red-accent)' }} /> {cert}
                </div>
              ))}
            </div>
          </div>

          {/* RFQ Form */}
          <div className="rfq-form-card">
            <h3 style={{ fontSize: '1.3rem', color: 'var(--slate-dark)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Request Instant Quote or Free Trial Sample
            </h3>

            {submitted ? (
              <div style={{ background: '#F0FDF4', border: '1px solid rgba(22,101,52,0.2)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', textAlign: 'center' }}>
                <CheckCircle2 size={48} style={{ color: '#166534', margin: '0 auto 1rem', display: 'block' }} />
                <h4 style={{ color: '#166534', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Inquiry Submitted!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Our sales team will follow up on your enquiry for <strong style={{ color: 'var(--red-accent)' }}>{grade}</strong> — {quantity}.
                </p>
                <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Flux Grade *</label>
                    <select className="form-control" value={grade} onChange={e => setGrade(e.target.value)}>
                      {FLUX_GRADES.map(g => <option key={g.id}>{g.name} — {g.type.split(' ')[0]}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Estimated Quantity</label>
                    <select className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)}>
                      <option>1 Bag (25kg Sample)</option>
                      <option>1 Ton (40 Bags)</option>
                      <option>5 Tons</option>
                      <option>10 Tons</option>
                      <option>20+ Tons (Full Truckload)</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input required type="text" className="form-control" placeholder="e.g. Rajesh Kumar" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Organization *</label>
                    <input required type="text" className="form-control" placeholder="e.g. Apex Steel Fabricators" value={company} onChange={e => setCompany(e.target.value)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input required type="email" className="form-control" placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input required type="tel" className="form-control" placeholder="+91 98765 43210" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Application Details / Special Requirements</label>
                  <textarea className="form-control" rows={3} placeholder="Wire diameter, plate thickness, target impact temperature, industry…" value={message} onChange={e => setMessage(e.target.value)} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-red-pill" style={{ justifyContent: 'center', marginTop: '0.25rem', width: '100%' }}>
                  <Send size={16} /> Submit Factory Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
