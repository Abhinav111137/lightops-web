<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# LightOps Solutions — Copilot Instructions

## Project Overview
This is the website for **LightOps Solutions**, a technology consulting company offering:
- Salesforce consulting (Sales Cloud, Service Cloud, Marketing Cloud, CPQ, Apex, LWC)
- DevOps (CI/CD, Kubernetes, Docker, Terraform, Ansible, GitOps)
- MLOps (MLflow, Kubeflow, SageMaker, Feature Stores)
- DevSecOps (SAST/DAST, Zero Trust, Vault, Compliance)
- FinOps (Cloud cost optimization, rightsizing, showback/chargeback)

**Domains:** lightops.in | lightops.tech

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- Designed to be converted to a WordPress theme
- No external frameworks or CDNs — pure vanilla for maximum portability

## Design System
- Primary color: `#0a2540`
- Accent color: `#00b4d8`
- Font: Segoe UI / system-ui
- Border radius: `12px`
- All styles live in `style.css`

## Conventions
- Use BEM-like class naming in CSS
- Keep JavaScript in `script.js`
- Pages: `index.html`, `services.html`, `contact.html`
- All pages share the same `<header>` and `<footer>` structure
- Contact form uses client-side validation and simulates submission via `setTimeout`

## WordPress Notes
- This site is designed to be migrated to WordPress
- Use Contact Form 7 or WPForms for the contact form when building the WP theme
- The `style.css` should get WordPress theme headers when converting
