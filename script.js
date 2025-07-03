// Loader Animation with Fade-Out Effect
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (!loader) return;

    setTimeout(() => {
        loader.style.transition = "opacity 1s ease-out";
        loader.style.opacity = 0;
    }, 500);

    setTimeout(() => {
        loader.style.visibility = "hidden";
    }, 1500);
});

// Navbar Active Link Highlight with Smooth Transition
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Page Fade-In Effect with Smooth Transition and Slight Scale Effect
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    body.style.opacity = 0;
    body.style.transform = "scale(0.98)";

    setTimeout(() => {
        body.style.transition = "opacity 1s ease, transform 1s ease";
        body.style.opacity = 1;
        body.style.transform = "scale(1)";
    }, 200);
});

// Smooth Scrolling Effect for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth"
        });
    });
});
