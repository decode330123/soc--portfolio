// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navigation click fade effect
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        document.body.classList.remove("fade-out");
      }, 500);
    });
  });
});
