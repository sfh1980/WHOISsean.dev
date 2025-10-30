// Smooth scroll for internal anchors
document.addEventListener('click', function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const id = target.getAttribute('href');
  if (!id || id === '#') return;
  const dest = document.querySelector(id);
  if (!dest) return;
  e.preventDefault();
  dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  dest.setAttribute('tabindex', '-1');
  dest.focus({ preventScroll: true });
});

// Mobile menu toggle (no-op if button/nav not present)
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('nav[aria-label="Primary"]');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });
});


