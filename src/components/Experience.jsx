import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-role">
                    {exp.role} · {exp.company}
                  </div>
                  <div className="timeline-period">{exp.period}</div>
                </div>

                <div className="timeline-org">
                  <Briefcase size={14} style={{ display: 'inline', marginRight: 6 }} />
                  {exp.duration}
                </div>

                <ul className="timeline-bullets">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

