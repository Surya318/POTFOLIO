import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const { personal, contact } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ state: 'loading', msg: 'Sending message...' });

    try {
      const res = await fetch(contact.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ state: 'success', msg: 'Thank you! Your message was sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          msg: `Could not send via Formspree right now. Feel free to email me directly at ${personal.email}`,
        });
      }
    } catch {
      setStatus({
        state: 'error',
        msg: `Network error. Please email me directly at ${personal.email}`,
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div>
            <p className="contact-text">{contact.message}</p>

            <div className="contact-cards">
              <a href={`mailto:${personal.email}`} className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{personal.email}</div>
                </div>
              </a>

              <a href={`tel:${personal.phone}`} className="contact-card-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+91 {personal.phone}</div>
                </div>
              </a>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">{personal.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {status.state === 'success' && (
              <div className="form-alert success">
                <CheckCircle2 size={18} style={{ display: 'inline', marginRight: 8 }} />
                {status.msg}
              </div>
            )}
            {status.state === 'error' && (
              <div className="form-alert error">
                <AlertCircle size={18} style={{ display: 'inline', marginRight: 8 }} />
                {status.msg}
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Write your message or project requirements here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={status.state === 'loading'}
            >
              <Send size={16} /> {status.state === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

