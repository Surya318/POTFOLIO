import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-top-line"></div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <GithubIcon size={15} /> Source Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
