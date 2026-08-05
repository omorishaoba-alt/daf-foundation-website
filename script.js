/*
====================================================
DANIEL ASEKHAME FOUNDATION (DAF FOUNDATION)
Production JavaScript
====================================================
*/

"use strict";

/*==================================================
  MOBILE NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }

});

/*==================================================
  SMOOTH SCROLLING
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

/*==================================================
  ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href && href.includes(`#${current}`)) {

            link.classList.add("active");

        }

    });

});

/*==================================================
  FADE-IN ON SCROLL
==================================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".focus-card,\
    .value-card,\
    .programme-card,\
    .impact-card,\
    .strategy-card,\
    .roadmap-card,\
    .gallery-item,\
    .news-card,\
    .award-card,\
    .vm-card"

).forEach(card => {

    card.classList.add("fade-item");

    observer.observe(card);

});

/*==================================================
  IMPACT COUNTER
==================================================*/

const counters = document.querySelectorAll(".impact-card h3");

const animateCounter = counter => {

    const raw = counter.innerText.replace(/[^0-9]/g, "");

    if (!raw) return;

    const target = parseInt(raw, 10);

    let current = 0;

    const step = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        current += step;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.innerText = current.toLocaleString() + "+";

    }, 20);

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    if (/^\d/.test(counter.innerText)) {

        counterObserver.observe(counter);

    }

});

/*==================================================
  DONATION BUTTON TRACKING
==================================================*/

document.querySelectorAll(".btn-donate,.donate-btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Donation button clicked.");

    });

});

/*==================================================
  CURRENT YEAR
==================================================*/

document.querySelectorAll(".current-year").forEach(item => {

    item.textContent = new Date().getFullYear();

});

/*==================================================
  PREVENT EMPTY FORM SUBMISSION
==================================================*/

document.querySelectorAll("form").forEach(form => {

    form.addEventListener("submit", event => {

        const requiredFields = form.querySelectorAll("[required]");

        let valid = true;

        requiredFields.forEach(field => {

            if (!field.value.trim()) {

                valid = false;
                field.focus();

            }

        });

        if (!valid) {

            event.preventDefault();

            alert("Please complete all required fields before submitting.");

        }

    });

});

/*==================================================
  END OF FILE
==================================================*/
