// Loader Animation with Fade-Out Effect and Removal
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Start fade out after 0.5 seconds
    setTimeout(() => {
        loader.style.transition = "opacity 1s ease-out";
        loader.style.opacity = 0;
    }, 500);

    // After fade-out animation (1s), completely remove loader from DOM
    setTimeout(() => {
        if (loader) loader.style.display = "none";
    }, 1600);
});

// Navbar Active Link Highlight with Smooth Transition
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Page Fade-In Effect with Scale
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    body.style.opacity = 0;
    body.style.transform = "scale(0.98)";
    body.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
        body.style.opacity = 1;
        body.style.transform = "scale(1)";
    }, 200);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,  // Adjust if navbar is fixed
                behavior: "smooth"
            });
        }
    });
});
