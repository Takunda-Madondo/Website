# Portfolio 
### Pure HTML / CSS / JS 

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Main page (all sections)
│
├── css/
│   ├── variables.css           ← Design tokens (colours, fonts, spacing)
│   ├── base.css                ← Reset, typography, buttons, layout
│   ├── nav.css                 ← Sticky navigation
│   ├── hero.css                ← Hero + orbital diagram
│   ├── about.css               ← About section
│   ├── skills.css              ← Skills cards + progress bars
│   ├── projects.css            ← Projects list
│   ├── services.css            ← Services grid
│   ├── contact.css             ← Map + social icons + form
│   ├── footer.css              ← Footer
│   ├── animations.css          ← Keyframes + scroll reveal
│   └── responsive.css          ← All breakpoints
│
├── js/
│   ├── main.js                 ← Theme toggle, nav, scroll, reveals, form
│   ├── orbital.js              ← Orbital diagram particle animations
│   └── map.js                  ← Leaflet map (Bryanston, Gauteng)
│
└── assets/
    ├── cv.pdf               
    ├── images/
    │   ├── profile.jpg        
    │   └── og-image.jpg        ← Social share preview image
    └── fonts/                  ← Self-host fonts here (optional)
```
## 🎨 Theming

All colours live in `css/variables.css`. To change the primary accent:

```css
[data-theme="dark"] {
  --accent: #4f8ef7;   /* change this */
  --accent-2: #7c3aed; /* and this */
}
[data-theme="light"] {
  --accent: #1e5fc2;   /* and this */
  --accent-2: #5b21b6; /* and this */
}
```
## 📦 External Dependencies (CDN — no install needed)

| Library | Purpose | CDN |
|---------|---------|-----|
| Google Fonts | DM Serif Display, Outfit, DM Mono | `fonts.googleapis.com` |
| Leaflet 1.9.4 | Interactive map | `unpkg.com/leaflet` |
| OpenStreetMap | Map tiles | `tile.openstreetmap.org` |
