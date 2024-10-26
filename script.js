// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Contact Form Handling (placeholder for real functionality)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
});
