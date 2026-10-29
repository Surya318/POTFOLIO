import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data';

export default function Hero() {
  const { hero, personal } = portfolioData;
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = hero.typingRoles;
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && roleText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timeout = setTimeout(() => {}, 400);
    } else {
      const speed = isDeleting ? 45 : 95;
      timeout = setTimeout(() => {
        setRoleText(
          isDeleting
            ? currentRole.substring(0, roleText.length - 1)
            : currentRole.substring(0, roleText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex, hero.typingRoles]);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot-pulse"></span>
              <span>Available for Internships</span>
            </div>

            <p className="hero-greeting">{hero.greeting}</p>
            <h1 className="hero-name">
              Surya <span className="gradient-text">Kesavadasupalem</span>
            </h1>

            <div className="hero-typing">
              <span className="typing-prefix">// </span>
              <span className="gradient-text">{roleText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-bio">{hero.bio}</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a href={hero.resume} download className="btn btn-outline">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span className="social-title">Find me on:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-link"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Portrait Visual */}
          <div className="hero-visual">
            <div className="photo-glow-ring">
              <div className="photo-inner">
                <img
                  src={hero.photo}
                  alt={personal.name}
                  className="hero-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            </div>

            {/* Floating skill tags */}
            <div className="floating-badge badge-1">🐍 Python</div>
            <div className="floating-badge badge-2">🤖 AI/ML</div>
            <div className="floating-badge badge-3">⚛️ React</div>
          </div>
        </div>
      </div>
    </section>
  );
}
