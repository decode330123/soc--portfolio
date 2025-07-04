// --- Mobile Hamburger Menu Toggle & Smooth Scroll & Tooltips ---
document.addEventListener("DOMContentLoaded", () => {
  // Create hamburger button and insert into navbar
  const nav = document.querySelector(".navbar");
  const navLinks = nav.querySelector(".nav-links");
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = `<span></span><span></span><span></span>`;
  nav.insertBefore(hamburger, navLinks);

  // Toggle nav-links visibility on hamburger click (for mobile)
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu on link click
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
        }
      }
    });
  });

  // Add tooltips to nav links
  navLinks.querySelectorAll("a").forEach(link => {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = link.textContent;
    link.appendChild(tooltip);

    link.addEventListener("mouseenter", () => {
      tooltip.style.opacity = "1";
      tooltip.style.visibility = "visible";
    });
    link.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    });
  });
});

// --- Loader fade out, Section fade-in, and Active Nav Highlight ---
window.addEventListener("load", () => {
  // Fade out loader after 1.5s
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500);

  // Fade-in animations for home and grid sections
  const homeSection = document.querySelector(".home");
  const gridSection = document.querySelector(".section-grid");

  if (homeSection) {
    homeSection.style.opacity = "0";
    homeSection.style.transform = "translateY(20px)";
    setTimeout(() => {
      homeSection.style.transition = "opacity 1s ease, transform 1s ease";
      homeSection.style.opacity = "1";
      homeSection.style.transform = "translateY(0)";
    }, 1700);
  }

  if (gridSection) {
    gridSection.style.opacity = "0";
    gridSection.style.transform = "translateY(20px)";
    setTimeout(() => {
      gridSection.style.transition = "opacity 1s ease, transform 1s ease";
      gridSection.style.opacity = "1";
      gridSection.style.transform = "translateY(0)";
    }, 1900);
  }

  // Highlight active nav link based on current URL
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

