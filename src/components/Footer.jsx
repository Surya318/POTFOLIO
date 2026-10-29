import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="nav-logo" style={{ marginBottom: 6 }}>
              <div className="logo-badge">{personal.initials}</div>
              <span>{personal.name}</span>
            </div>
            <p className="footer-tagline">{personal.tagline}</p>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
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

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {personal.name}. Built with React &amp; plain CSS.
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
