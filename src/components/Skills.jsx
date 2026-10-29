import React from 'react';
import { Code2, Globe, Cpu, Database, Bot, Wrench } from 'lucide-react';
import { portfolioData } from '../data';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Programming: <Code2 size={20} color="var(--accent)" />,
    'Web Development': <Globe size={20} color="var(--accent)" />,
    'Frameworks & Libraries': <Cpu size={20} color="var(--accent)" />,
    Databases: <Database size={20} color="var(--accent)" />,
    'AI / ML': <Bot size={20} color="var(--accent)" />,
    'Tools & Platforms': <Wrench size={20} color="var(--accent)" />,
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skills.map((group, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="skill-category-title">
                {categoryIcons[group.category] || <Code2 size={20} />}
                {group.category}
              </h3>
              <div className="skill-chips">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

