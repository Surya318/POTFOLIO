import React from 'react';
import { MapPin, GraduationCap, Globe, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function About() {
  const { about } = portfolioData;

  const factIcons = {
    0: <MapPin size={20} className="fact-icon" />,
    1: <GraduationCap size={20} className="fact-icon" />,
    2: <Globe size={20} className="fact-icon" />,
    3: <Mail size={20} className="fact-icon" />,
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line mx-auto"></div>
        </div>

        <div className="about-center-content">
          <div className="about-text text-center">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="facts-grid">
            {about.facts.map((fact, index) => (
              <div key={index} className="fact-card">
                {factIcons[index]}
                <div>
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-val">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
