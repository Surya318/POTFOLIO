# Surya Kesavadasupalem — Personal Portfolio

Modern, professional, and fully responsive portfolio website built with **React.js**, **Vite**, and **Plain CSS**, with **Python** runner support.

---

## ⚡ How to Run

You have two easy ways to run your portfolio locally:

### Option 1: Using Python (Instant, No build step)
Open your terminal in this folder and run:
```bash
python run.py
```
> This serves the production-ready build and automatically opens your browser at **http://localhost:5173**.

---

### Option 2: Using Node / React Dev Server (Vite)
```bash
# 1. Install dependencies (already installed)
npm install

# 2. Run local dev server with hot reload
npm run dev

# 3. Build for production
npm run build
```
Your dev server will be live at **http://localhost:5173**.

---

## 📁 Project Structure

```
POTFOLIO/
├── public/
│   └── assets/
│       ├── SURYA_PIC.jpeg    <-- Your portrait photo
│       └── resume.pdf        <-- Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        <-- Sticky navbar with Dark/Light toggle & mobile drawer
│   │   ├── Hero.jsx          <-- Hero with typewriter role animation & glowing photo
│   │   ├── About.jsx         <-- Career objective, photo & quick facts
│   │   ├── Skills.jsx        <-- Grouped skill cards (Programming, AI/ML, etc.)
│   │   ├── Projects.jsx      <-- Legal Simplifier & BudgetBuddy cards
│   │   ├── Experience.jsx    <-- Rinex AI internship timeline
│   │   ├── Education.jsx     <-- KIET B.Tech, Intermediate, 10th timeline
│   │   ├── Contact.jsx       <-- Interactive validated form & contact cards
│   │   ├── Footer.jsx        <-- Footer with back to top button
│   │   └── Icons.jsx         <-- Crisp SVG icons (GitHub, LinkedIn)
│   ├── data.js               <-- Single file to update all your portfolio content
│   ├── App.jsx               <-- Main application component
│   ├── main.jsx              <-- React entry point
│   └── index.css             <-- Design tokens, themes & animations
├── dist/                     <-- Production build (ready to deploy)
├── run.py                    <-- Python local server script
├── package.json
└── vite.config.js
```

---

## 🚀 Free 1-Click Deployment (Vercel)

1. Push this repository to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/Surya318/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your `portfolio` repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy** — your site will be live on a global CDN in under 1 minute!

---

## 📬 Free Contact Form Setup (Formspree)

1. Visit [formspree.io](https://formspree.io) and create a free account.
2. Click **New Form** and copy your form endpoint (e.g. `https://formspree.io/f/xyzabcde`).
3. Open `src/data.js` and update `formspreeUrl`:
   ```javascript
   contact: {
     formspreeUrl: "https://formspree.io/f/YOUR_ACTUAL_ID"
   }
   ```
4. Rebuild: `npm run build`.
