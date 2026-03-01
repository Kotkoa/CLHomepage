# Aurelius Trust Labs

Corporate homepage for **Aurelius Trust Labs** — a strategic research and advisory firm focused on distributed systems, applied cryptography, digital identity, and economic trust architectures.

**Live:** https://kotkoa.github.io/CLHomepage/

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — build tool and dev server
- **Tailwind CSS 4** — utility-first CSS with native Vite plugin
- **Headless UI 2** — accessible UI primitives (mobile menu)

## Getting Started

### Prerequisites

- Node.js >= 20 (see `.nvmrc`)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

Build output goes to `dist/`.

## Project Structure

```
├── index.html              Entry point
├── vite.config.js          Vite configuration
├── public/                 Static assets (photos, images)
└── src/
    ├── index.jsx           React root (createRoot)
    ├── index.css           Tailwind imports and theme
    ├── App.jsx             Main layout and routing
    ├── Header.jsx          Navigation bar with logo
    ├── MenuDropdown.jsx    Mobile hamburger menu
    ├── Home.jsx            Hero section
    ├── About.jsx           About the company
    ├── Focus.jsx           Services and focus areas
    ├── Leadership.jsx      Expert team profiles
    ├── Contact.jsx         Contact form with validation
    ├── Footer.jsx          Copyright footer
    ├── img/                SVG icons and logo
    └── utils/
        └── validate.js     Form validation
```

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.

Build command: `npm run build`, output directory: `dist`.

## Formatting

```bash
npx prettier --write .
```

Uses Prettier 3 with `prettier-plugin-tailwindcss` for automatic class sorting.
