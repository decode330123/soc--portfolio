// Loader Animation
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
});

// Navbar Active Link Highlight
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Page Fade-In Effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = 1;
    }, 100);
});
