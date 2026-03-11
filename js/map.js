/* ═══════════════════════════════════════════════
   MAP — map.js  (Leaflet)
   Pinpoints Bryanston, Gauteng, South Africa
   ═══════════════════════════════════════════════ */

'use strict';

(function initMap() {
  // Bryanston coordinates
  const LAT = -26.0500;
  const LNG =  28.0220;
  const ZOOM = 13;

  // Wait for DOM
  function setup() {
    const mapEl = document.getElementById('map');
    if (!mapEl || !window.L) return;

    const map = L.map('map', {
      center: [LAT, LNG],
      zoom: ZOOM,
      zoomControl: true,
      scrollWheelZoom: false,   // prevent accidental scroll-zoom
      attributionControl: true,
    });

    window._map = map; // expose so theme toggle can invalidateSize

    // Tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon using CSS
    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#4f8ef7';

    const markerIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="
          width: 36px; height: 36px;
          border-radius: 50% 50% 50% 0;
          background: ${accentColor};
          border: 3px solid #fff;
          transform: rotate(-45deg);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          display:flex; align-items:center; justify-content:center;
        ">
          <span style="transform:rotate(45deg); font-size:14px; line-height:1;">📍</span>
        </div>
        <div style="
          margin-top: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: ${accentColor};
          white-space: nowrap;
          text-align: center;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          font-weight: 500;
          letter-spacing: 0.05em;
        ">Bryanston, ZA</div>
      `,
      iconSize: [80, 60],
      iconAnchor: [36, 36],
      popupAnchor: [0, -40],
    });

    const marker = L.marker([LAT, LNG], { icon: markerIcon }).addTo(map);

    marker.bindPopup(`
      <div style="
        font-family: 'Outfit', system-ui, sans-serif;
        font-size: 13px;
        line-height: 1.5;
        min-width: 160px;
      ">
        <strong style="font-size:14px;">📍 Bryanston</strong><br>
        <span style="color:#888; font-size:12px;">Gauteng, South Africa</span><br>
        <br>
        <span style="font-size:12px;">Open to remote &amp; on-site work</span>
      </div>
    `, {
      maxWidth: 200,
      className: 'custom-popup',
    });

    // Open popup by default
    setTimeout(() => marker.openPopup(), 600);

    // Add Gauteng region circle
    L.circle([LAT, LNG], {
      color: accentColor,
      fillColor: accentColor,
      fillOpacity: 0.06,
      weight: 1.5,
      opacity: 0.35,
      radius: 3500,
      dashArray: '6 6',
    }).addTo(map);

    // Re-centre map when section becomes visible
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            map.invalidateSize();
            map.setView([LAT, LNG], ZOOM);
          }, 200);
          obs.disconnect();
        }
      }, { threshold: 0.1 });
      obs.observe(contactSection);
    }
  }

  // Leaflet may not be loaded yet — wait
  if (window.L) {
    setup();
  } else {
    window.addEventListener('load', setup);
  }
})();
