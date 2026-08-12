/* =========================================================
   PRAVEENKUMAR V R — PORTFOLIO JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ================= MOBILE NAVIGATION ================= */

const navToggle =
    document.getElementById("nav-toggle");

const navMenu =
    document.getElementById("nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


if (navToggle && navMenu) {

    navToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon =
            navToggle.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* Close menu after clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon =
            navToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= HEADER SCROLL ================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("theme-toggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

}


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "light-theme"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

    }

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );

            const theme =
                document.body.classList.contains(
                    "light-theme"
                )
                    ? "light"
                    : "dark";

            localStorage.setItem(
                "portfolio-theme",
                theme
            );

            updateThemeIcon();

        }
    );

}


updateThemeIcon();


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.querySelector(".typing-text");


const typingWords = [

    "Python / Django Developer",

    "Backend Developer",

    "Full Stack Developer",

    "REST API Developer"

];


let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        typingWords[wordIndex];


    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1)
                % typingWords.length;

        }

    }


    const typingSpeed =
        isDeleting ? 45 : 85;


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(section => {

        const top =
            section.offsetTop;

        const height =
            section.offsetHeight;

        const id =
            section.getAttribute("id");


        if (
            scrollPosition >= top &&
            scrollPosition <
                top + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) === `#${id}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= PROJECT FILTER ================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projectCards.forEach(card => {

                const categories =
                    card.dataset.category
                        .split(" ");


                if (
                    filter === "all" ||
                    categories.includes(
                        filter
                    )
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


function updateBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


const formStatus =
    document.getElementById(
        "form-status"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const subject =
                document.getElementById(
                    "subject"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                formStatus.textContent =
                    "Please fill in all fields.";

                return;

            }


            /*
             * For a static GitHub Pages website,
             * this opens the visitor's email client.
             *
             * Replace the email address below
             * with your real email address.
             */

            const receiver =
                "your-email@example.com";


            const mailSubject =
                encodeURIComponent(
                    subject
                );


            const mailBody =
                encodeURIComponent(
                    `Name: ${name}\n\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                );


            window.location.href =
                `mailto:${receiver}` +
                `?subject=${mailSubject}` +
                `&body=${mailBody}`;


            formStatus.textContent =
                "Opening your email client...";


            contactForm.reset();

        }
    );

}


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById(
        "current-year"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= KEYBOARD ACCESSIBILITY ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains(
                "show"
            )
        ) {

            navMenu.classList.remove(
                "show"
            );


            const icon =
                navToggle.querySelector(
                    "i"
                );


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);