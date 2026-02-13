/* script.js — small JS to handle mobile nav and contact form mailto behavior */

document.addEventListener('DOMContentLoaded', function () {
  // Update footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // Close mobile nav when a link is clicked (better UX)
  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => document.body.classList.remove('nav-open'))
  );

  // Contact form — build mailto link and open mail client on submit
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please complete all fields before sending.');
      return;
    }

    // Compose email body
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from Sweety Gupta's portfolio`
    );

    // Use the email provided in the details
    const mailto = `mailto:sg293307@gamil.com?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailto;
  });
});