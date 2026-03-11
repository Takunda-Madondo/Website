/* ═══════════════════════════════════════════════
   MAIN — main.js
   ═══════════════════════════════════════════════ */

'use strict';

/* ── Year ── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ══════════════════════════════════════
   THEME  — light is default
══════════════════════════════════════ */
let isDark = false;

function applyTheme(dark) {
  isDark = dark;
  const theme = dark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = dark ? '🌙' : '☀️';
  try { localStorage.setItem('theme', theme); } catch(e) {}
  if (window._map) setTimeout(() => window._map.invalidateSize(), 50);
}

function toggleTheme() { applyTheme(!isDark); }

(function initTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      applyTheme(true);
    } else {
      applyTheme(false); // light is default
    }
  } catch(e) {
    applyTheme(false);
  }
})();

/* ══════════════════════════════════════
   SMOOTH SCROLL — eased animation
══════════════════════════════════════ */
function easeInOutCubic(t) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
}

function smoothScrollTo(targetY, duration) {
  duration = duration || 750;
  const startY    = window.scrollY;
  const distance  = targetY - startY;
  const startTime = performance.now();

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function smoothTo(e, id) {
  if (e && e.preventDefault) e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - 64;
  smoothScrollTo(targetY, 750);
  closeMobileMenu();
}

function scrollToTop(e) {
  if (e && e.preventDefault) e.preventDefault();
  smoothScrollTo(0, 700);
}

// ------------------------------------------------------------------
// NAVIGATION – highlight active link
// ------------------------------------------------------------------
const navSections = ['hero','about','skills','projects','services','contact'];

function updateActiveNav() {
  const scrollPos = window.scrollY + 80; // adjust for fixed nav height
  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    const btn = document.querySelector(`.nav-links button[onclick*="'${id}'"]`);
    if (!btn) return;
    if (scrollPos >= top && scrollPos < bottom) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
// also call after smooth scroll
const origSmoothTo = smoothTo;
window.smoothTo = function(e, id) {
  origSmoothTo(e, id);
  setTimeout(updateActiveNav, 300);
};

// run once on load
updateActiveNav();

/* ══════════════════════════════════════
   NAV — sticky + back-to-top visibility
══════════════════════════════════════ */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 30);
  const btt = document.getElementById('backToTop');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ══════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════ */
const mobileMenu = document.getElementById('mobileMenu');
const burgerBtn  = document.getElementById('burgerBtn');

function toggleMobileMenu() {
  const open = mobileMenu.classList.toggle('open');
  burgerBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('open');
  if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenu.classList.contains('open')
    && !mobileMenu.contains(e.target)
    && burgerBtn && !burgerBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ══════════════════════════════════════
   SKILL BARS (animate immediately)
══════════════════════════════════════ */
// Instead of observing visibility, set widths on all fills right away so
// every skill bar animates simultaneously on page load.
document.querySelectorAll('.bar-fill').forEach(bar => {
  const pct = (parseFloat(bar.dataset.w || '1') * 100) + '%';
  bar.style.width = pct;
  setTimeout(() => bar.classList.add('in'), 80);
});

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function handleSend(btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = `Sent! ✓ <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
  btn.style.background = '#059669';
  btn.style.boxShadow  = 'none';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML        = orig;
    btn.style.background = '';
    btn.style.boxShadow  = '';
    btn.disabled = false;
  }, 4000);
}

// show feedback when the form is submitted (native POST still occurs)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const btn = contactForm.querySelector('#sendBtn');
    if (btn) handleSend(btn);
    // let the browser perform the actual submit
  });
}

/* ── Globals ── */
window.toggleTheme      = toggleTheme;
window.smoothTo         = smoothTo;
window.scrollToTop      = scrollToTop;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu  = closeMobileMenu;
window.handleSend       = handleSend;
