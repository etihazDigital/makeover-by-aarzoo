document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var closeBtn = document.querySelector('.mobile-menu .close-btn');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () { mobileMenu.classList.add('open'); });
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
    });
  }

  // Portfolio filters
  var filterBtns = document.querySelectorAll('.filter-btn');
  var tiles = document.querySelectorAll('[data-cat]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-filter');
      tiles.forEach(function (tile) {
        if (cat === 'all' || tile.getAttribute('data-cat') === cat) {
          tile.style.display = '';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbTag = lightbox.querySelector('.tag');
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var label = item.getAttribute('data-label') || '';
        if (lbTag) lbTag.textContent = label;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('close-btn')) {
        lightbox.classList.remove('open');
      }
    });
  }

  // Contact form (demo only — no backend)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Thank you — this is a design demo, so the form isn\u2019t connected yet. Please use WhatsApp below to reach out.';
        note.style.display = 'block';
      }
    });
  }

  // Active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
