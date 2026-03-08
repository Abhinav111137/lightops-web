# LightOps Solutions Website

**Company:** LightOps Solutions  
**Domains:** [lightops.in](https://lightops.in) | [lightops.com](https://lightops.com)  
**Stack:** HTML5, CSS3, Vanilla JS (WordPress-ready theme structure)

---

## 📁 Project Structure

```
My-site/
├── index.html        # Home page — Hero, Services overview, Motto, Why Us
├── services.html     # Detailed Services page (Salesforce, DevOps, MLOps, DevSecOps, FinOps)
├── contact.html      # Contact page with client query form
├── style.css         # Global styles (responsive, modern design)
├── script.js         # Mobile nav, form validation, scroll animations
└── README.md
```

## 🚀 Services Covered

| Service | Description |
|---------|-------------|
| **Salesforce** | CRM implementation, Apex, LWC, CPQ, all Salesforce clouds |
| **DevOps** | CI/CD, Kubernetes, Terraform, GitOps, Observability |
| **MLOps** | ML pipelines, MLflow, Kubeflow, model monitoring |
| **DevSecOps** | SAST/DAST, Zero Trust, compliance automation |
| **FinOps** | Cloud cost optimization, rightsizing, showback/chargeback |

## 🌟 Company Motto
> *"Where Clarity Meets Velocity — We Don't Just Deliver Solutions, We Ignite Possibilities."*

## 🖥️ How to Preview Locally

1. Open the folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

## 🔌 WordPress Migration Guide

To convert this into a WordPress theme:

1. Create a new folder: `wp-content/themes/lightops/`
2. Split `index.html` into `header.php`, `footer.php`, `index.php`, `page-services.php`, `page-contact.php`
3. Add `style.css` with WordPress theme headers at the top
4. Use **Contact Form 7** or **WPForms** plugin for the contact form
5. Register the theme in `functions.php`
6. Upload via **Appearance → Themes → Upload Theme**

## 📬 Contact Form

The contact form currently shows a success message on submit (client-side simulation).  
**To connect to a real backend:**
- WordPress: Use **Contact Form 7**, **WPForms**, or **Gravity Forms**
- Or replace the `setTimeout` in `script.js` with a `fetch()` POST to your form endpoint

## 📄 License

© 2026 LightOps Solutions. All rights reserved.
