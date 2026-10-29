import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';

export default function Certificates() {
  const { certificates } = portfolioData;

  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials &amp; Recognition</span>
          <h2 className="section-title">
            Certificates &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon-box">
                <Award size={22} />
              </div>
              <div className="cert-content">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
              <span className="cert-badge">
                <CheckCircle size={13} style={{ display: 'inline', marginRight: 4 }} />
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
