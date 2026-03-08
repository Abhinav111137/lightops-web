// ============================================================
//  LightOps Solutions — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Nav Toggle ----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---- Sticky header shadow on scroll ----
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header && header.classList.add('scrolled');
    } else {
      header && header.classList.remove('scrolled');
    }
  });

  // ---- Shared Helpers ----
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function highlightError(el, msg) {
    el.style.borderColor = '#e53e3e';
    el.style.boxShadow   = '0 0 0 3px rgba(229,62,62,.15)';
    el.focus();
    let errEl = el.parentNode.querySelector('.err-msg');
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.className = 'err-msg';
      errEl.style.cssText = 'color:#e53e3e;font-size:.78rem;margin-top:4px;';
      el.parentNode.appendChild(errEl);
    }
    errEl.textContent = msg;
  }

  function clearError(el) {
    el.style.borderColor = '';
    el.style.boxShadow   = '';
    const errEl = el.parentNode.querySelector('.err-msg');
    if (errEl) errEl.remove();
  }

  // ---- Submit to Formspree via fetch ----
  async function submitToFormspree(form, btn, successEl, originalBtnText) {
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        if (successEl) {
          successEl.classList.add('show');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        const json = await response.json();
        const msg = json.errors ? json.errors.map(e => e.message).join(', ') : 'Something went wrong. Please try again.';
        alert('❌ ' + msg);
      }
    } catch (err) {
      alert('❌ Network error. Please check your connection and try again.');
    } finally {
      btn.textContent = originalBtnText;
      btn.disabled = false;
    }
  }

  // ---- Contact Form ----
  const contactForm    = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const firstName = contactForm.firstName.value.trim();
      const lastName  = contactForm.lastName.value.trim();
      const email     = contactForm.email.value.trim();
      const service   = contactForm.service.value;
      const message   = contactForm.message.value.trim();

      if (!firstName) { highlightError(contactForm.firstName, 'Please enter your first name.'); return; }
      if (!lastName)  { highlightError(contactForm.lastName,  'Please enter your last name.');  return; }
      if (!isValidEmail(email)) { highlightError(contactForm.email, 'Please enter a valid email address.'); return; }
      if (!service)   { highlightError(contactForm.service,   'Please select a service.'); return; }
      if (!message || message.length < 10) { highlightError(contactForm.message, 'Please enter a message (at least 10 characters).'); return; }

      await submitToFormspree(contactForm, contactForm.querySelector('.submit-btn'), contactSuccess, 'Send Message ✈️');
    });
    contactForm.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => clearError(el));
    });
  }

  // ---- Quote Form ----
  const quoteForm    = document.getElementById('quoteForm');
  const quoteSuccess = document.getElementById('quoteSuccess');

  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const firstName = quoteForm.firstName.value.trim();
      const lastName  = quoteForm.lastName.value.trim();
      const email     = quoteForm.email.value.trim();
      const company   = quoteForm.company.value.trim();
      const service   = quoteForm.service.value;
      const budget    = quoteForm.budget.value;
      const timeline  = quoteForm.timeline.value;
      const project   = quoteForm.project.value.trim();

      if (!firstName) { highlightError(quoteForm.firstName, 'Please enter your first name.'); return; }
      if (!lastName)  { highlightError(quoteForm.lastName,  'Please enter your last name.');  return; }
      if (!isValidEmail(email)) { highlightError(quoteForm.email, 'Please enter a valid email address.'); return; }
      if (!company)   { highlightError(quoteForm.company,   'Please enter your company name.'); return; }
      if (!service)   { highlightError(quoteForm.service,   'Please select a service.'); return; }
      if (!budget)    { highlightError(quoteForm.budget,    'Please select a budget range.'); return; }
      if (!timeline)  { highlightError(quoteForm.timeline,  'Please select a start timeline.'); return; }
      if (!project || project.length < 20) { highlightError(quoteForm.project, 'Please describe your project (at least 20 characters).'); return; }

      await submitToFormspree(quoteForm, quoteForm.querySelector('.submit-btn'), quoteSuccess, 'Request My Quote 📄');
    });
    quoteForm.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => clearError(el));
    });
  }

  // ---- Scroll-in animation for cards ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.service-card, .why-card, .service-detail').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

});
