// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add your logic here to handle the form submission (e.g., send data to a server)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Thank you for your message! I will get back to you soon.');
});
