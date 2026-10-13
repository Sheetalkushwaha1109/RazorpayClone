# Razorpay Frontend Clone

A high-quality, pixel-accurate, and fully responsive frontend clone of **[Razorpay](https://razorpay.com/)** built strictly with **pure HTML5, CSS3, and vanilla JavaScript** (No React, No Tailwind CSS, No Bootstrap, No external paid APIs).

Developed as a frontend practice project for an internship portfolio submission.

---

## 🎯 Key Project Highlights

- **Faithful Design Language**: Recreated Razorpay's clean white and blue color palette (`#305eff` electric blue, `#192839` deep navy text, `#f8fafc` cool backgrounds, `#009e5c` success green), typography hierarchy, spacing scale, modern card elevations, and diagonal layout geometry.
- **100% Offline & Local Execution**: Bundled official SVG vector logos and local brand assets (`assets/logos/`) to ensure the project runs without broken images, external CDN downtime, or paid API requirements.
- **Zero Dead Buttons**: Every single button, tab, card link, and modal trigger possesses an active JavaScript interaction or smooth scroll anchor.
- **No Placeholder Copy**: Filled entirely with genuine Razorpay product descriptions, feature specifications, founder quotes, compliance notices, and API documentation.
- **Fully Responsive & Zero Overflow**: Tested across **320px, 375px, 425px, 768px, 1024px, and 1440px** with verified 0px horizontal overflow (`docScroll == clientWidth`).
- **Accessible & Semantic**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`), ARIA attributes (`aria-expanded`, `aria-label`, `aria-modal`), and keyboard navigation support (`Esc` key closes modals/menus).

---

## 🚀 Website Sections Built

1. **Top Announcement Bar**:
   - Displays real RBI regulatory notice regarding Payment Aggregator licensing.
   - Includes a working dismiss button (`×`) with smooth collapse animation.

2. **Sticky Header & Navigation Bar**:
   - Official Razorpay SVG branding.
   - Mega dropdown menus with icons and descriptions:
     - **Payments**: Payment Gateway, Payment Links, Payment Pages, Razorpay POS, Subscriptions, Optimizer.
     - **Banking+**: Current Account, Payouts & Bulk API, Corporate Credit Cards, Forex & Escrow.
     - **Payroll**: Payroll for Startups, Payroll for Enterprises.
     - **Developers**: Documentation, API Reference, Webhooks, Interactive Checkout Demo.
     - **Resources**: Customer Stories, Interactive Fee Calculator.
     - **Pricing**: Direct jump link to interactive calculator.
   - Region indicator (`🇮🇳 India`), "Login" button, and "Sign Up →" button.
   - Mobile hamburger menu toggle with smooth 3-bar to 'X' animation.

3. **Mobile Navigation Drawer**:
   - Full-height off-canvas drawer with backdrop blur.
   - Collapsible accordion dropdowns for all categories.
   - Prominent Login and Sign Up CTA buttons.

4. **Hero Section**:
   - Category pill switcher: **Payments**, **Effortless Banking**, **Automated Payroll**, **Easy In-Store POS**, **AI Native**.
   - Dynamic headline and value proposition updates upon selecting each pill.
   - Value props checklist: `₹0 Setup Fee`, `Instant Onboarding`, `99.9% Uptime`, `PCI-DSS Level 1`.
   - **Interactive Live Checkout Simulator**:
     - Authentic Razorpay checkout modal simulation with merchant details (`Mamaearth`, `₹455.00`).
     - Tab switcher between **UPI (QR code / UPI ID)**, **Card (Visa/Mastercard/RuPay)**, and **Netbanking**.
     - Working "Pay Now" button with simulated payment processing and instant success overlay with unique transaction ID (`pay_...`).

5. **Trust Indicators & Brand Logo Marquee**:
   - Infinite smooth CSS ticker with 14 genuine partner brands: Swiggy, Zomato, BookMyShow, Nykaa, CRED, Blinkit, Zepto, Zerodha, Ola, Lenskart, Urban Company, Myntra, Ather, and IndiGo.
   - Live metrics row: **1,50,000+** Businesses, **100+** Payment Modes, **₹2,50,000+ Cr** Processed, **99.9%** Uptime.
   - Official compliance badges: **PCI DSS Level 1 Certified**, **ISO/IEC 27001:2022 Certified**, **AICPA SOC-2 Compliant**, and **RBI Authorised Payment Aggregator**.

6. **The All-in-One Finance Platform (Product Suite)**:
   - Interactive category filter tabs: *All Products*, *Accept Payments*, *Make Payouts (RazorpayX)*, *Business Banking*, *Automate Payroll*, *Credit & Loans*, *AI Native Stack*.
   - 12 comprehensive cards featuring custom category badges, SVGs, value propositions, and working action buttons.
   - "Know More" button opens a rich **Product Specifications Modal** detailing APIs, settlement turnaround, and use cases.

7. **Industry Solutions ("Powering Every Industry")**:
   - Interactive selector for **E-Commerce**, **Education**, **BFSI & Fintech**, **SaaS & IT**, and **Freelancers & Creators**.
   - Displays contextual metrics, key feature checklists, and prominent brands in that vertical.

8. **Breakthrough Innovations ("We have innovated at every instance")**:
   - Showcase cards for **Turbo UPI** (5X faster, 0 redirection), **Magic Checkout** (+40% conversion, 50% RTO drop), **MoneySaver Export Account** (50% forex savings), **Line of Credit** (₹50L revolving credit), **Optimizer** (AI infinity router), and **Payouts Pro** (multi-bank failover).

9. **Developer Section ("Built for Developers by Developers")**:
   - High-contrast deep navy layout (`#081225`).
   - Interactive code terminal supporting syntax-highlighted tabs for **cURL**, **Node.js**, **Python**, **Java**, and **PHP**.
   - Working "Copy Code" button with clipboard integration and floating toast notification feedback.
   - "Open in Playground" button that smoothly scrolls to the hero checkout simulator.

10. **No-Code Suite**:
    - Dedicated cards for zero-code merchants: Payment Links, Payment Pages, Payment Button, Invoices, Smart QR Codes, and Subscriptions.

11. **Customer Testimonials & Social Proof ("Razorpay grows with you!")**:
    - Authentic quotes from Indian founders: Ghazal Alagh (Mamaearth), Nischay AG (Jar), Aditya Shankar (Doubtnut), Neha Tandon Sharma (Isadora Life), Durlabh Rawat (Barosi), and Nikita Gujral (AN Fashions).

12. **Transparent Pricing & Interactive Fee Calculator**:
    - Transparent pricing breakdown: 2% standard domestic rate, ₹0 setup fee, ₹0 annual maintenance charges.
    - Interactive volume slider ranging from ₹50,000 to ₹50,00,000.
    - Real-time JavaScript calculation of estimated processing fee, net bank settlement, and settlement turnaround time.

13. **Frequently Asked Questions (FAQ Accordion)**:
    - 8 comprehensive accordion questions addressing payment methods, international currencies, RazorpayX, RBI regulation, onboarding speed, and settlement cycles.
    - Smooth expand/collapse animation with active icon rotation.

14. **Promotional CTA Banner**:
    - "Supercharge your business with Razorpay" callout with demo action buttons.

15. **Multi-Column Footer**:
    - Full categorization across 6 columns: Accept Payments, Banking Plus, Payroll, Developers, Free Tools, and Company.
    - Registered office address in Adugodi, Bengaluru, Karnataka, CIN number, social media links, and regulatory disclaimer.

16. **Interactive Demo Modals**:
    - **Sign Up Modal**: 2-step onboarding form simulation.
    - **Login Modal**: Mobile/Email credentials form simulation.
    - **Product Specifications Modal**: Deep dive into architecture and feature specs.
    - **Toast Notification Engine**: Floating toast notifications for actions.
    - **Back to Top Floating Button**: Appears when scrolled beyond 400px.

---

## 🛠️ Technology Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic tags, accessible landmarks, structured metadata |
| **CSS3** | CSS custom properties (variables), Grid & Flexbox, keyframe animations, media queries |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, modal state management, clipboard API, interactive calculators, checkout simulation |
| **SVG** | Vector icons, official Razorpay logo, responsive illustrations |

---

## 📱 Responsive Testing & Breakpoints

The website has been tested using automated headless browser testing (via Microsoft Edge & Chrome CDP Emulation) across all required screen widths:

| Width | Device Category | Status | Horizontal Overflow |
| :---: | :---: | :---: | :---: |
| **320px** | Small Mobile (e.g. iPhone SE / Galaxy Mini) | ✅ Passed | **0px (No overflow)** |
| **375px** | Standard Mobile (e.g. iPhone 12/13/14) | ✅ Passed | **0px (No overflow)** |
| **425px** | Large Mobile (e.g. Pixel / Galaxy Plus) | ✅ Passed | **0px (No overflow)** |
| **768px** | Tablet Portrait (e.g. iPad Mini) | ✅ Passed | **0px (No overflow)** |
| **1024px** | Tablet Landscape / Small Laptop | ✅ Passed | **0px (No overflow)** |
| **1440px** | Desktop & Ultra-wide displays | ✅ Passed | **0px (No overflow)** |

Automated interaction suite result: **21 / 21 Tests Passed** with 0 browser console errors.

---

## 💻 How to Run the Project Locally

No installation of Node.js, npm, or build tools is required. You can run the project using any of the following methods:

### Method 1: Direct File Open (Easiest)
Simply double-click `index.html` or drag and drop it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and choose **"Open with Live Server"**.

### Method 3: Python Built-in Server
Open your terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Method 4: Node.js / npx
```bash
npx serve .
```

---

## 📂 Project Structure

```text
├── index.html            # Complete semantic HTML5 structure with all sections
├── style.css             # Modular CSS3 styling, design tokens, and media queries
├── script.js             # Vanilla ES6+ interactions, calculator, modals, & simulation
├── assets/
│   ├── razorpay-logo.svg # Official Razorpay vector brand logo
│   └── logos/            # Genuine partner and certification logos
│       ├── airtel.png
│       ├── ather.png
│       ├── blinkit.png
│       ├── bookmyshow.png
│       ├── cred.png
│       ├── indigo.png
│       ├── iso-27001.png
│       ├── lenskart.png
│       ├── myntra.png
│       ├── nykaa.png
│       ├── ola.png
│       ├── pci-dss.png
│       ├── soc-aicpa.png
│       ├── swiggy.png
│       ├── urbancompany.png
│       ├── zepto.png
│       ├── zerodha.png
│       └── zomato.png
└── README.md             # Project documentation and execution instructions
```

---

## ⚖️ Educational Disclaimer

This project is an **independent frontend clone created exclusively for educational and internship portfolio evaluation purposes**.
- **No real financial services or payment processing**: All payments, accounts, and order IDs are client-side simulations.
- **No credential collection**: Does not collect or store user passwords, OTPs, bank account numbers, or card details.
- All brand trademarks, logos, and service marks belong to **Razorpay Software Limited** and their respective owners.
