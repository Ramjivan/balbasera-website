# Bal Basera Child Care Home — AI Agent & Developer Architecture Guide

> **Project**: Bal Basera Child Care Home Official Website  
> **Production URL**: https://balbasera.jnpplus.org  
> **Parent Organization**: JNP Plus (https://jnpplus.org)  
> **Hosting & CI/CD**: Cloudflare Pages (Deploy on push to GitHub `master` branch)

---

## 🧭 Project Overview & Current State

Bal Basera is a dedicated, separate Astro web project representing the registered Child Care Home in Jodhpur, Rajasthan, providing shelter, education, healthcare, and love to 80 children affected by HIV/AIDS.

* **Status**: Production-ready. Builds statically in ~0.6s.
* **Analytics**: Google Analytics 4 (`G-788KQZRJ8D`) hardcoded in `src/layouts/Layout.astro`.
* **Form Handling**: Contact inquiries are sent via AJAX directly to `jodhpursansthan@yahoo.co.in` with Cloudflare Turnstile bot protection.
* **SEO & AI Discovery**: Includes `public/robots.txt`, `public/llms.txt`, and rich Schema.org `NGO` / Child Care Home JSON-LD metadata.

---

## 📂 Architecture & Directory Structure

```
balbasera-website/
├── astro.config.mjs           # Astro configuration (static output)
├── package.json               # Dependencies & scripts (Node.js >=22.12.0)
├── public/
│   ├── llms.txt               # AI grounding file for LLMs (Perplexity/ChatGPT)
│   ├── robots.txt             # Search crawler directives + explicit AI bot allowances
│   └── photos/                # Local photos of Bal Basera facility & children
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Global template: GA4 (G-788KQZRJ8D), Schema.org, OpenGraph, Navbar, Footer
│   ├── components/
│   │   ├── Navbar.astro       # Clean header navigation with link back to JNP Plus
│   │   └── Footer.astro       # Footer with legal notes, CWC oversight info, & dynamic copyright
│   ├── styles/
│   │   └── global.css         # CSS design tokens (--color-sunflower, --color-sky, --color-warm-white)
│   └── pages/
│       ├── index.astro        # Homepage (Hero, Daily Life, Impact Metrics, Photo Highlights)
│       ├── about/             # About Bal Basera (History since August 2010, Juvenile Justice Act, CWC oversight)
│       ├── programs/          # Programs & Activities (Education, Nutrition Lab, Health, Sports)
│       ├── gallery/           # Photo Gallery
│       └── contact/           # Contact form (AJAX forwarding to Yahoo mail + Turnstile)
```

---

## 🎨 Design & Accessibility Rules

1. **High-Contrast Text on Overlays**: Always enforce crisp white text (`#ffffff`) with `text-shadow: 0 2px 6px rgba(0,0,0,0.6)` when headings overlay photos.
2. **Typography**: Headings use `Lora` (serif), and all card bodies and UI copy use `Inter` (sans-serif).
3. **No Donation Buttons**: The organization does not run direct online donation drives on this site. Keep calls-to-action focused on partnerships, volunteering, visits, and support inquiries.

---

## 📧 Form Submissions & Security

* **Target Inbox**: `jodhpursansthan@yahoo.co.in`
* **Backend**: FormSubmit AJAX (`https://formsubmit.co/ajax/jodhpursansthan@yahoo.co.in`)
* **Spam Protection**: Cloudflare Turnstile (`https://challenges.cloudflare.com/turnstile/v0/api.js`) + hidden honeypot field (`_honey`).

---

## 🛠️ Developer Commands

```bash
# Start local development server
npm run dev

# Run production build & verify 0 errors
npm run build

# Preview production build locally
npm run preview
```
