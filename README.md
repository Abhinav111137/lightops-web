# ⚡ LightOps Solutions — Official Website

> *"Where Clarity Meets Velocity — We Don't Just Deliver Solutions, We Ignite Possibilities."*

**Live Website:** [lightops.in](https://lightops.in) | [lightops.tech](https://lightops.tech)  
**Netlify URL:** [splendid-faloodeh-7c8e0c.netlify.app](https://splendid-faloodeh-7c8e0c.netlify.app)  
**GitHub Repo:** [github.com/Abhinav111137/lightops-web](https://github.com/Abhinav111137/lightops-web)  
**Company:** LightOps Solutions, Pune, India — Est. 2025

---

## 📋 Table of Contents
- [About](#about)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Features](#features)
- [Form & Email Setup](#form--email-setup)
- [Hosting & Deployment](#hosting--deployment)
- [Domain Setup](#domain-setup)
- [Local Development](#local-development)
- [WordPress Migration Guide](#wordpress-migration-guide)
- [Folder Structure](#folder-structure)

---

## About

This is the official marketing website for **LightOps Solutions** — a technology consulting company based in **Pune, India**, offering services in:

| Service | Description |
|---|---|
| ☁️ **Salesforce** | CRM implementation, Apex, LWC, CPQ, Sales/Service/Marketing Cloud |
| 🛠️ **DevOps** | CI/CD pipelines, Docker, Kubernetes, Terraform, GitOps |
| 🤖 **MLOps** | ML pipelines, MLflow, Kubeflow, SageMaker, Feature Stores |
| 🔒 **DevSecOps** | SAST/DAST, Zero Trust, Vault, Compliance automation |
| 💰 **FinOps** | Cloud cost optimization, rightsizing, showback/chargeback |

---

## Pages

| File | Page | Purpose |
|---|---|---|
| `index.html` | **Home** | Hero, services overview, company motto, Why Us section |
| `services.html` | **Services** | Detailed breakdown of all 5 service areas |
| `contact.html` | **Contact Us** | Simple query form for general enquiries |
| `quote.html` | **Get a Quote** | Detailed project intake form with budget & timeline |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 (semantic) |
| **Styling** | CSS3 (custom, no frameworks) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Form Backend** | [Formspree](https://formspree.io) (free tier) |
| **Version Control** | Git + GitHub (private repo) |
| **Hosting** | [Netlify](https://netlify.com) (free tier) |
| **Domains** | GoDaddy → `lightops.in`, `lightops.tech` |
| **Local Dev** | [live-server](https://www.npmjs.com/package/live-server) via npx |

> ⚠️ **No external CSS frameworks, no CDNs, no npm dependencies** — pure vanilla for maximum portability and WordPress compatibility.

---

## Design System

| Token | Value | Used For |
|---|---|---|
| `--primary` | `#0a2540` | Navy — backgrounds, text |
| `--accent` | `#00b4d8` | Cyan — highlights, CTAs |
| `--light` | `#f0f6ff` | Light blue-white — section backgrounds |
| `--radius` | `12px` | Border radius on cards |
| `--font` | `Segoe UI, system-ui` | All text |
| `--shadow` | `0 8px 32px rgba(10,37,64,.12)` | Card shadows |

---

## Features

- ✅ **Fully Responsive** — mobile, tablet, desktop
- ✅ **Sticky navigation** with mobile hamburger menu
- ✅ **Hero section** with animated floating service cards
- ✅ **Scroll-in animations** on service cards and sections
- ✅ **Contact form** — general queries (sends email via Formspree)
- ✅ **Quote form** — detailed project intake (budget, timeline, description)
- ✅ **Client-side form validation** with inline error messages
- ✅ **Real email delivery** via Formspree `fetch` API
- ✅ **SVG Logo files** — square (400×400) and horizontal (600×200)
- ✅ **SEO meta tags** on all pages
- ✅ **WordPress-ready** structure

---

## Form & Email Setup

Forms are powered by **[Formspree](https://formspree.io)** — submissions go directly to `info@lightops.tech`.

| Form | Formspree ID | Page |
|---|---|---|
| LightOps Contact | `xgonvrew` | `contact.html` |
| LightOps Quote | `mzdjzybq` | `quote.html` |

**Free plan:** 50 submissions/month  
**How it works:** User submits form → Formspree receives it → Email sent to `info@lightops.tech`

---

## Hosting & Deployment

**Platform:** [Netlify](https://netlify.com) (Free tier)

### Deploy Flow
```
VS Code (local files)
      ↓  git push
GitHub (Abhinav111137/lightops-web) [Private]
      ↓  auto-deploy
Netlify (free hosting + SSL)
      ↓  custom domain
lightops.in / lightops.tech
```

### To deploy updates:
```bash
git add .
git commit -m "your update message"
git push origin main
```
Netlify auto-deploys within ~30 seconds of every push. ✅

---

## Domain Setup

Domains registered on **GoDaddy**, DNS pointed to Netlify.

### DNS Records (add in GoDaddy):
| Type | Name | Value |
|---|---|---|
| `A` | `@` | `75.2.60.5` |
| `CNAME` | `www` | `your-site.netlify.app` |

SSL certificate is auto-provisioned by Netlify (Let's Encrypt). ✅

---

## Local Development

### Prerequisites
- [Node.js](https://nodejs.org) (for npx)
- A modern browser

### Run locally
```bash
cd /path/to/My-site
npx live-server --port=5500 --open=index.html
```

Then open: [http://127.0.0.1:5500](http://127.0.0.1:5500)

---

## WordPress Migration Guide

This site is structured to be easily converted into a WordPress theme.

| HTML File | WordPress Equivalent |
|---|---|
| `<header>` block | `header.php` |
| `<footer>` block | `footer.php` |
| `index.html` | `front-page.php` |
| `services.html` | `page-services.php` |
| `contact.html` | `page-contact.php` |
| `quote.html` | `page-quote.php` |
| `style.css` | `style.css` (add WP theme headers at top) |

### WordPress theme header to add to `style.css`:
```css
/*
Theme Name: LightOps Solutions
Theme URI: https://lightops.in
Author: LightOps Solutions
Description: Official website theme for LightOps Solutions
Version: 1.0
*/
```

### Recommended WordPress Plugins:
- **Contact Form 7** or **WPForms** → replace Formspree forms
- **Yoast SEO** → SEO optimization
- **WP Rocket** → performance

---

## Folder Structure

```
My-site/
├── index.html            # Home page
├── services.html         # Services detail page
├── contact.html          # Contact / query form
├── quote.html            # Get a Quote form
├── style.css             # All styles (global design system)
├── script.js             # JS — nav, form validation, animations
├── logo.svg              # Square logo 400×400 (LinkedIn profile)
├── logo-horizontal.svg   # Horizontal logo 600×200 (LinkedIn banner)
├── README.md             # This file
├── .github/
│   └── copilot-instructions.md   # VS Code Copilot custom instructions
├── .vscode/
│   └── tasks.json        # Live server task
└── Logo/
    ├── logo.svg
    └── logo-horizontal.svg
```

---

## Contact

| | |
|---|---|
| 📧 Email | info@lightops.tech |
| 📧 Email | info@lightops.in |
| 📍 Location | Pune, Maharashtra, India |
| 🌐 Web | [lightops.in](https://lightops.in) |
| 🕐 Hours | Mon–Fri, 9 AM – 7 PM IST |

---

© 2026 LightOps Solutions. Est. 2025, Pune, India. All rights reserved.
