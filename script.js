// Mobile menu toggle
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

document.getElementById('hamburgerBtn').addEventListener('click', function (e) {
  e.stopPropagation();
  document.getElementById('mobileMenu').classList.toggle('open');
});

document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Sticky nav shadow
window.addEventListener('scroll', function () {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 40px rgba(0,0,0,0.6)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(function (el) { revealObserver.observe(el); });

// Form submit
function handleSubmit() {
  const btn = document.querySelector('.form-submit');
  btn.textContent = '✔ Request Sent — We\'ll Call You Soon!';
  btn.style.background = '#1a7a1a';
  btn.style.borderColor = '#1a7a1a';
  btn.disabled = true;
}
