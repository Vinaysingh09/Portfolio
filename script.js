// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
});
