# University Portal & Anatomy Explorer (Sample Project — Chapter 02)
## គម្រោងគំរូមេរៀនទី ២: រចនាសម្ព័ន្ធគេហទំព័រ និងដំណើរការរចនា (Website Structure and Design Process)

គម្រោងគំរូនេះត្រូវបានបង្កើតឡើងសម្រាប់មុខវិជ្ជា **ការរចនាគេហទំព័រ (Web Design - Bachelor Year 3)** ក្នុង **Module 01: Web Design Fundamentals & UI/UX — Chapter 02**។

---

### 🌟 គោលបំណងនៃគម្រោង (Project Objectives)
1. **ស្វែងយល់ជាក់ស្តែងអំពីរចនាសម្ព័ន្ធ Semantic នៃគេហទំព័រ (Website Anatomy)**:
   - `<header>` (Branding, Search, Global Hotline, Language Switcher)
   - `<nav>` (Primary Navigation Bar, Dropdowns, Mobile Hamburger Menu)
   - `<section class="hero">` (Value Proposition, Primary & Secondary Call-to-Actions)
   - `<main>` (Academic Cards Grid, Inverted Pyramid Content Model)
   - `<aside>` (Sidebar Widgets: Free Advice CTA, Academic Events, Quick Links, Newsletter)
   - `<footer>` (Mega Footer: Mini-Sitemap, Accreditation, Address, Legal Links, Copyright)
2. **ឧបករណ៍រំលេចផ្នែកកូដ (Anatomy Inspector HUD)**: គ្រូ និងសិស្សអាចចុចប៊ូតុងនៅលើរបារអណ្តែត (Floating Toolbar) ដើម្បីរំលេចបន្ទាត់ Outlines និងស្លាក Semantic Badges នៃផ្នែកនីមួយៗផ្ទាល់លើអេក្រង់។
3. **ផែនទីគេហទំព័រអន្តរកម្ម (Interactive Visual Sitemap Modal)**: បង្ហាញរចនាសម្ព័ន្ធព័ត៌មាន (Information Architecture) កម្រិត Level 1, Level 2, និង Level 3 នៃសាកលវិទ្យាល័យ។
4. **ឯកសារតម្រូវការគម្រោង (Project Requirements Specification Modal)**: ស្វែងយល់ពីភាពខុសគ្នារវាង Functional Requirements (FR) និង Non-Functional Requirements (NFR)។

---

### 📂 រចនាសម្ព័ន្ធឯកសារ (Project Structure)
```
sample_project/
├── index.html          # Semantic HTML5 (Header, Nav, Hero, Main, Aside, Footer, Modals)
├── css/
│   └── style.css       # CSS3 Layout (Flexbox, Grid, Mega Footer, Anatomy Highlighter)
├── js/
│   └── app.js          # JavaScript (Anatomy HUD controller, Mobile nav toggle, Modals)
└── README.md           # ឯកសារណែនាំការប្រើប្រាស់
```

---

### 🚀 របៀបដំណើរការ (How to Run)
1. បើកឯកសារ `index.html` តាមរយៈ Web Browser ណាមួយ (Chrome, Edge, Safari, Firefox)។
2. ឬបើកតាមរយៈ **Live Server Extension** ក្នុង Visual Studio Code។
3. សាកល្បងចុចលើប៊ូតុងក្នុង **Anatomy Inspector** នៅជ្រុងខាងក្រោមស្តាំ ដើម្បីពិនិត្យមើលរចនាសម្ព័ន្ធ Semantic នីមួយៗ។
