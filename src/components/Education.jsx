import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-role">
                    {edu.degree}
                    <span className="score-badge">{edu.score}</span>
                  </div>
                  <div className="timeline-period">{edu.period}</div>
                </div>

                <div className="timeline-org">
                  <GraduationCap size={14} style={{ display: 'inline', marginRight: 6 }} />
                  {edu.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

