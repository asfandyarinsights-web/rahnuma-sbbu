const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.hidden = isOpen;
});

// Set active navigation link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
    }
});