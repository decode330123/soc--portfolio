// Loader Animation with Fade-Out Effect
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Add a fade-out transition to the loader
    setTimeout(() => {
        loader.style.transition = "opacity 1s ease-out";
        loader.style.opacity = 0;
    }, 500);  // Start fade-out after half a second

    // Hide loader completely after fade-out
    setTimeout(() => {
        loader.style.visibility = "hidden";
    }, 1500);  // Hide after 1.5 seconds (fade duration)
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

// Page Fade-In Effect with Smooth Transition and Slight Scale Effect
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    
    // Initial state: body is scaled down and invisible
    body.style.opacity = 0;
    body.style.transform = "scale(0.98)";

    // Fade-in and scale-up animation after a slight delay
    setTimeout(() => {
        body.style.transition = "opacity 1s ease, transform 1s ease";
        body.style.opacity = 1;
        body.style.transform = "scale(1)";
    }, 200);  // Delay to make it look smoother when page loads
});

// Smooth Scrolling Effect for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,  // Adjust for any fixed navbar
            behavior: "smooth"
        });
    });
});
