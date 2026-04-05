document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // HAMBURGER MENU
    // ===============================

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    // ===============================
    // DARK MODE
    // ===============================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        // Load saved theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
            themeToggle.textContent = "☀️";
        }

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                themeToggle.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggle.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }


    // ===============================
    // ACTIVE NAV LINK ON SCROLL
    // ===============================

    const sections = document.querySelectorAll("section");

    function activateNav() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", activateNav);


    // ===============================
    // EDUCATION BOOK TOGGLE
    // ===============================

    const eduBook = document.getElementById("eduBook");

    if (eduBook) {
        eduBook.addEventListener("click", () => {
            eduBook.classList.toggle("open");
        });
    }


    // ===============================
    // CONTACT FORM
    // ===============================

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully 🚀");
            form.reset();
        });
    }

});
