/* shared.js — inject nav, footer, ticker, scroll-reveal */

const NAV_HTML = `
<nav class="navbar navbar-expand-lg sse-nav py-2">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <div class="brand-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" fill="#E8A020"/>
          <circle cx="12" cy="12" r="2.2" fill="#0F1F3D"/>
          <g stroke="#E8A020" stroke-width="1.4" stroke-linecap="round">
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.9" y1="4.9" x2="7.1" y2="7.1"/>
            <line x1="16.9" y1="16.9" x2="19.1" y2="19.1"/>
            <line x1="19.1" y1="4.9" x2="16.9" y2="7.1"/>
            <line x1="7.1" y1="16.9" x2="4.9" y2="19.1"/>
          </g>
        </svg>
      </div>
      <div class="brand-text">
        <span class="brand-name">SHREE SURYA ENGINEERS</span>
        <span class="brand-tag">Heavy Duty Engineering Goods</span>
      </div>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#sseNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="sseNav">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-1 py-2 py-lg-0">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
        <li class="nav-item"><a class="nav-link" href="machinery.html">Machinery</a></li>
        <li class="nav-item"><a class="nav-link" href="clients.html">Clients</a></li>
        <li class="nav-item ms-lg-2"><a class="nav-link btn-nav-cta" href="contact.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav>`;

const TICKER_HTML = `
<div class="ticker-wrap">
  <div class="ticker-inner">
    <span class="ticker-item">Precision Engineering Spares</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Industrial Gears Manufacturing</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Heavy Duty Components</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Customized Engineering Solutions</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Machinery Spare Parts</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Precision Gear Components</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Precision Engineering Spares</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Industrial Gears Manufacturing</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Heavy Duty Components</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Customized Engineering Solutions</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Machinery Spare Parts</span>
    <span class="ticker-item ticker-sep">◆</span>
    <span class="ticker-item">Precision Gear Components</span>
    <span class="ticker-item ticker-sep">◆</span>
  </div>
</div>`;

const FOOTER_HTML = `
<div class="footer-gold-bar"></div>
<footer class="sse-footer">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <div class="footer-brand">
          <div class="brand-name-ft">SHREE SURYA ENGINEERS</div>
          <div class="brand-tag-ft">Heavy Duty Engineering Goods</div>
          <p class="mt-3">A trusted name in precision engineering since 1978. Delivering quality, durability and excellence from Surat, Gujarat.</p>
          <div class="mt-3 d-flex gap-2">
            <span class="badge bg-opacity-10 text-white border border-white border-opacity-10 px-3 py-2 font-mono" style="font-size:10px;letter-spacing:1.5px;">EST. 1978</span>
            <span class="badge bg-opacity-10 text-white border border-white border-opacity-10 px-3 py-2 font-mono" style="font-size:10px;letter-spacing:1.5px;">SURAT, GUJARAT</span>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4">
        <div class="footer-heading">Quick Links</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="machinery.html">Machinery</a></li>
          <li><a href="clients.html">Clients</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-4">
        <div class="footer-heading">Our Products</div>
        <ul class="footer-links">
          <li><a href="products.html">Bevel Gears</a></li>
          <li><a href="products.html">Helical Gears</a></li>
          <li><a href="products.html">Spur Gears</a></li>
          <li><a href="products.html">Worm Gear Components</a></li>
          <li><a href="products.html">Gear Shafts & Pinions</a></li>
          <li><a href="products.html">Coupling Parts</a></li>
          <li><a href="products.html">Industrial Chain Assemblies</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-4">
        <div class="footer-heading">Contact Info</div>
        <div class="footer-contact-item">
          <span>📍</span>
          <span>B7, Basement, Panchvati Park, Allayaniwadi, Begumpura, Surat – 395003, Gujarat</span>
        </div>
        <div class="footer-contact-item">
          <span>📞</span>
          <span><a href="tel:+919727772727" style="color:inherit;">+91 – 97277 72727</a></span>
        </div>
        <div class="footer-contact-item">
          <span>👤</span>
          <span>Gunjan Trivedi (Proprietor)</span>
        </div>
        <a href="contact.html" class="btn-primary-sse mt-3 d-inline-block" style="font-size:11px;padding:10px 22px;">Get a Quote →</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom mt-5">
    <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
      <p>© 2025 Shree Surya Engineers. All rights reserved.</p>
      <p class="font-mono" style="font-size:11px;letter-spacing:1px;">PRECISION · QUALITY · DURABILITY</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('sse-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject ticker
  const tickerEl = document.getElementById('sse-ticker');
  if (tickerEl) tickerEl.innerHTML = TICKER_HTML;

  // Inject footer
  const ftEl = document.getElementById('sse-footer');
  if (ftEl) ftEl.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const links = document.querySelectorAll('.sse-nav .nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal, .reveal-left');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => ro.observe(el));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.sse-nav');
    if (nav) nav.style.boxShadow = window.scrollY > 40 ? '0 4px 24px rgba(15,31,61,.12)' : '';
  });
});
