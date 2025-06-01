// Portfolio Website JavaScript — OOP style (tanpa intercept form)
class Portfolio {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a');
    this.initSmoothScrolling();
  }

  initSmoothScrolling() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetID = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
});
