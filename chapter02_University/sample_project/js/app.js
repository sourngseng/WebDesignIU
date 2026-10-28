/**
 * ============================================================
 * PROJECT: University Portal & Anatomy Explorer (Chapter 02)
 * AUTHOR: Web Design Curriculum (Bachelor Year 3)
 * FILE: js/app.js
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnatomyHighlighter();
  initMobileNav();
  initModals();
});

/* ============================================================
   1. ANATOMY HIGHLIGHTER HUD LOGIC
   ============================================================ */
function initAnatomyHighlighter() {
  const hudButtons = document.querySelectorAll('.btn-highlight');
  const btnToggleHud = document.getElementById('btn-toggle-hud');
  const hudBody = document.getElementById('hud-body');

  const anatomyElements = {
    header: {
      el: document.getElementById('site-header'),
      label: '<header> Header Section (Branding, Search & Global Actions)'
    },
    nav: {
      el: document.getElementById('primary-nav'),
      label: '<nav> Primary Navigation Bar (Wayfinding & Dropdowns)'
    },
    hero: {
      el: document.getElementById('hero-section'),
      label: '<section class="hero"> Value Proposition & Dual CTAs'
    },
    main: {
      el: document.getElementById('main-content-area'),
      label: '<main> Main Content Area (Central Information Body)'
    },
    sidebar: {
      el: document.getElementById('site-sidebar'),
      label: '<aside> Sidebar (Supplementary Links, Events & CTA Widget)'
    },
    footer: {
      el: document.getElementById('site-footer'),
      label: '<footer> Mega Footer (Sitemap, Address, Copyright & Legal)'
    }
  };

  function clearAllHighlights() {
    document.querySelectorAll('.anatomy-highlighted').forEach(el => {
      el.classList.remove('anatomy-highlighted');
      const badge = el.querySelector('.anatomy-highlight-label');
      if (badge) badge.remove();
    });
    hudButtons.forEach(btn => btn.classList.remove('active'));
  }

  function highlightComponent(key) {
    clearAllHighlights();
    const item = anatomyElements[key];
    if (!item || !item.el) return;

    item.el.classList.add('anatomy-highlighted');
    
    // Add semantic badge overlay
    const badge = document.createElement('div');
    badge.className = 'anatomy-highlight-label';
    badge.textContent = item.label;
    item.el.appendChild(badge);

    // Smooth scroll to the highlighted component
    item.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function highlightAllComponents() {
    clearAllHighlights();
    Object.keys(anatomyElements).forEach(key => {
      const item = anatomyElements[key];
      if (item && item.el) {
        item.el.classList.add('anatomy-highlighted');
        const badge = document.createElement('div');
        badge.className = 'anatomy-highlight-label';
        badge.textContent = item.label;
        item.el.appendChild(badge);
      }
    });
  }

  hudButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      hudButtons.forEach(b => b.classList.remove('active'));

      if (target === 'clear') {
        clearAllHighlights();
      } else if (target === 'all') {
        btn.classList.add('active');
        highlightAllComponents();
      } else {
        btn.classList.add('active');
        highlightComponent(target);
      }
    });
  });

  // Toggle HUD minimize
  let isMinimized = false;
  if (btnToggleHud && hudBody) {
    btnToggleHud.addEventListener('click', () => {
      isMinimized = !isMinimized;
      if (isMinimized) {
        hudBody.style.display = 'none';
        btnToggleHud.textContent = '+';
      } else {
        hudBody.style.display = 'block';
        btnToggleHud.textContent = '_';
      }
    });
  }
}

/* ============================================================
   2. MOBILE NAVIGATION LOGIC
   ============================================================ */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (toggleBtn && primaryNav) {
    toggleBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('mobile-open');
    });
  }
}

/* ============================================================
   3. MODALS LOGIC (Sitemap & Requirements)
   ============================================================ */
function initModals() {
  const sitemapModal = document.getElementById('sitemap-modal');
  const reqModal = document.getElementById('req-modal');

  const btnOpenSitemap = document.getElementById('btn-open-sitemap-modal');
  const btnCloseSitemap = document.getElementById('btn-close-sitemap');
  const btnCloseSitemapFooter = document.getElementById('btn-close-sitemap-footer');

  const btnOpenReq = document.getElementById('btn-open-req-modal');
  const btnCloseReq = document.getElementById('btn-close-req');
  const btnCloseReqFooter = document.getElementById('btn-close-req-footer');

  function openModal(modal) {
    if (modal) modal.classList.add('open');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('open');
  }

  if (btnOpenSitemap) btnOpenSitemap.addEventListener('click', () => openModal(sitemapModal));
  if (btnCloseSitemap) btnCloseSitemap.addEventListener('click', () => closeModal(sitemapModal));
  if (btnCloseSitemapFooter) btnCloseSitemapFooter.addEventListener('click', () => closeModal(sitemapModal));

  if (btnOpenReq) btnOpenReq.addEventListener('click', () => openModal(reqModal));
  if (btnCloseReq) btnCloseReq.addEventListener('click', () => closeModal(reqModal));
  if (btnCloseReqFooter) btnCloseReqFooter.addEventListener('click', () => closeModal(reqModal));

  // Close when clicking outside dialog
  window.addEventListener('click', (e) => {
    if (e.target === sitemapModal) closeModal(sitemapModal);
    if (e.target === reqModal) closeModal(reqModal);
  });
}
