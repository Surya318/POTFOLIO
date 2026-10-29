// ============================================================
// main.js — All interactivity for Surya K. Portfolio
// ============================================================

(function () {
  'use strict';

  // ── Wait for DOM ─────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNavbar();
    initTypingAnimation();
    initScrollReveal();
    initSkillChips();
    initContactForm();
    initBackToTop();
    setCurrentYear();
    initMobileNav();
  });

  // ──────────────────────────────────────────────────────────
  // 1. THEME TOGGLE (dark / light)
  // ──────────────────────────────────────────────────────────
  function initTheme() {
    var html = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    var stored = localStorage.getItem('portfolio-theme');

    function applyTheme(theme) {
      html.setAttribute('data-theme', theme);
      if (btn) {
        btn.textContent = theme === 'light' ? '🌙' : '☀️';
        btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      }
    }

    // Default to dark
    applyTheme(stored || 'dark');

    if (btn) {
      btn.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('portfolio-theme', next);
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  // 2. NAVBAR — scroll shadow + active section highlighting
  // ──────────────────────────────────────────────────────────
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Scroll → add .scrolled class
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    // Active section highlight via IntersectionObserver
    var navLinks = document.querySelectorAll('.nav-link[data-section]');
    var sections = document.querySelectorAll('section[id]');

    if ('IntersectionObserver' in window && sections.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle('active', link.getAttribute('data-section') === id);
            });
          }
        });
      }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
      });

      sections.forEach(function (s) { observer.observe(s); });
    }
  }

  // ──────────────────────────────────────────────────────────
  // 3. MOBILE NAV HAMBURGER
  // ──────────────────────────────────────────────────────────
  function initMobileNav() {
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ──────────────────────────────────────────────────────────
  // 4. TYPING ANIMATION
  // ──────────────────────────────────────────────────────────
  function initTypingAnimation() {
    var el = document.getElementById('typing-text');
    if (!el) return;

    var data = window.portfolioData;
    var roles = (data && data.hero && data.hero.typingRoles) || [
      'AI Student',
      'Python Developer',
      'Full-Stack Developer',
      'RAG Chatbot Builder'
    ];

    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingSpeed = 110;
    var deletingSpeed = 55;
    var pauseAfterType = 1800;
    var pauseAfterDelete = 400;

    function type() {
      var current = roles[roleIndex];

      if (isDeleting) {
        charIndex--;
        el.textContent = current.substring(0, charIndex);
      } else {
        charIndex++;
        el.textContent = current.substring(0, charIndex);
      }

      var delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === current.length) {
        // Finished typing → pause then delete
        delay = pauseAfterType;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting → next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = pauseAfterDelete;
      }

      setTimeout(type, delay);
    }

    // Start with a short delay
    setTimeout(type, 600);
  }

  // ──────────────────────────────────────────────────────────
  // 5. SCROLL REVEAL — IntersectionObserver
  // ──────────────────────────────────────────────────────────
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ──────────────────────────────────────────────────────────
  // 6. SKILL CHIPS — staggered reveal
  // ──────────────────────────────────────────────────────────
  function initSkillChips() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.skill-chip').forEach(function (c) {
        c.classList.add('chip-visible');
      });
      return;
    }

    var groups = document.querySelectorAll('.skill-group');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var chips = entry.target.querySelectorAll('.skill-chip');
          chips.forEach(function (chip, i) {
            setTimeout(function () {
              chip.classList.add('chip-visible');
            }, i * 80);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    groups.forEach(function (g) { observer.observe(g); });
  }

  // ──────────────────────────────────────────────────────────
  // 7. CONTACT FORM — validation + submission
  // ──────────────────────────────────────────────────────────
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var submitBtn = form.querySelector('.btn-submit');
    var statusEl = document.getElementById('form-status');

    function showError(inputId, msg) {
      var input = document.getElementById(inputId);
      var errEl = document.getElementById(inputId + '-error');
      if (input) input.classList.add('error');
      if (errEl) {
        errEl.textContent = msg;
        errEl.classList.add('show');
      }
    }

    function clearError(inputId) {
      var input = document.getElementById(inputId);
      var errEl = document.getElementById(inputId + '-error');
      if (input) input.classList.remove('error');
      if (errEl) errEl.classList.remove('show');
    }

    function clearAllErrors() {
      ['form-name', 'form-email', 'form-message'].forEach(function (id) {
        clearError(id);
      });
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function validate() {
      var ok = true;
      clearAllErrors();

      var name = document.getElementById('form-name');
      var email = document.getElementById('form-email');
      var message = document.getElementById('form-message');

      if (!name || name.value.trim().length < 2) {
        showError('form-name', 'Please enter your name (at least 2 characters).');
        ok = false;
      }

      if (!email || !validateEmail(email.value)) {
        showError('form-email', 'Please enter a valid email address.');
        ok = false;
      }

      if (!message || message.value.trim().length < 10) {
        showError('form-message', 'Message must be at least 10 characters.');
        ok = false;
      }

      return ok;
    }

    // Live validation on blur
    ['form-name', 'form-email', 'form-message'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('blur', function () {
          validate();
        });
        el.addEventListener('input', function () {
          clearError(id);
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validate()) return;

      // Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      if (statusEl) {
        statusEl.className = 'form-status';
        statusEl.textContent = '';
      }

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            if (statusEl) {
              statusEl.className = 'form-status success';
              statusEl.textContent = '✅ Message sent! I\'ll get back to you soon.';
            }
            form.reset();
            clearAllErrors();
          } else {
            return res.json().then(function (data) {
              throw new Error(data.error || 'Submission failed.');
            });
          }
        })
        .catch(function (err) {
          if (statusEl) {
            statusEl.className = 'form-status error';
            statusEl.textContent = '❌ Something went wrong. Please email me directly at suryakesavadasupalem03@gmail.com';
          }
          console.error('Form error:', err);
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message ✉️';
          }
        });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 8. BACK TO TOP
  // ──────────────────────────────────────────────────────────
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 9. CURRENT YEAR
  // ──────────────────────────────────────────────────────────
  function setCurrentYear() {
    var el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
  }

})();

