/* ═══════════════════════════════════════════════
   ORBITAL DIAGRAM — orbital.js
   ═══════════════════════════════════════════════ */

'use strict';

(function initOrbital() {
  const svg = document.querySelector('.orbital-svg');
  if (!svg) return;

  // Add additional animated particles along the outer ring
  function createParticle(cx, cy, r, speed, delay, color) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', '3');
    circle.setAttribute('fill', color || 'var(--accent)');
    circle.setAttribute('opacity', '0.7');

    // Animate with SMIL
    const animX = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    animX.setAttribute('attributeName', 'transform');
    animX.setAttribute('type', 'rotate');
    animX.setAttribute('from', `0 ${cx} ${cy}`);
    animX.setAttribute('to', `360 ${cx} ${cy}`);
    animX.setAttribute('dur', speed + 's');
    animX.setAttribute('begin', delay + 's');
    animX.setAttribute('repeatCount', 'indefinite');

    circle.appendChild(animX);

    // Start position on ring
    circle.setAttribute('cx', String(cx));
    circle.setAttribute('cy', String(cy - r));

    svg.appendChild(circle);
    return circle;
  }

  // Outer ring particles
  createParticle(210, 210, 185, 22, 0,   'var(--accent)');
  createParticle(210, 210, 185, 22, 7,   'var(--accent-2)');
  createParticle(210, 210, 185, 22, 14,  'var(--accent-3)');

  // Mid ring particles
  createParticle(210, 210, 135, 16, 3,   'var(--accent-2)');
  createParticle(210, 210, 135, 16, 10,  'var(--accent)');

})();
