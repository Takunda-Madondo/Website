# Portfolio — Software Engineer & AI Consultant
### Pure HTML / CSS / JS — GitHub Pages Ready

Zero build tools. Zero npm. Open `index.html` and it works.

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
    ├── cv.pdf                  ← ⚠️ Add your CV here
    ├── images/
    │   ├── profile.jpg         ← ⚠️ Add your photo here
    │   └── og-image.jpg        ← Social share preview image
    └── fonts/                  ← Self-host fonts here (optional)
```

---

## 🚀 Getting Started

### Option A — Open directly
```bash
# Just open in a browser
open index.html
```

### Option B — Local server (recommended, avoids CORS issues with map)
```bash
# Python
python -m http.server 8080

# Node
npx serve .

# VS Code: install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit: `http://localhost:8080`

---

## 🌐 Deploy to GitHub Pages

### Method 1: Simple upload
1. Create a GitHub repo (e.g. `portfolio`)
2. Upload all files
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site is live at `https://USERNAME.github.io/portfolio/`

### Method 2: GitHub CLI
```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create portfolio --public --push --source=.
# Then enable Pages in repo Settings
```

---

## ✏️ Personalisation Checklist

### Required
- [ ] Add `assets/cv.pdf` — your CV file
- [ ] Add `assets/images/profile.jpg` — your headshot
- [ ] Update email in `index.html` (search `hello@yourdomain.com`)
- [ ] Update LinkedIn URL (search `linkedin.com/in/yourhandle`)
- [ ] Update GitHub URL (search `github.com/yourusername`)
- [ ] Update WhatsApp number (search `27000000000`)
- [ ] Update Instagram handle (search `yourhandle`)
- [ ] Add real GitHub links to each project
- [ ] Add real demo/live links to each project

### Optional
- [ ] Change `portfolio.dev` logo text in nav (in `index.html`, `.nav-logo`)
- [ ] Update name/tagline in `<title>` and `<meta description>`
- [ ] Adjust map zoom level in `js/map.js` (default: `13`)
- [ ] Change accent colour in `css/variables.css` → `--accent`

---

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

---

## 📦 External Dependencies (CDN — no install needed)

| Library | Purpose | CDN |
|---------|---------|-----|
| Google Fonts | DM Serif Display, Outfit, DM Mono | `fonts.googleapis.com` |
| Leaflet 1.9.4 | Interactive map | `unpkg.com/leaflet` |
| OpenStreetMap | Map tiles | `tile.openstreetmap.org` |

All other code is vanilla HTML/CSS/JS.
