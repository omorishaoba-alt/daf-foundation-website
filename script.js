/* ==========================================
   DANIEL ASEKHAME FOUNDATION
   WEBSITE v1.2
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {

        const button = item.querySelector(".accordion-header");

        button.addEventListener("click", function () {

            accordionItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(function(link){

    const href = link.getAttribute("href");

    if(href === currentPage || (currentPage === "" && href === "index.html")){

        link.classList.add("active");

    }else{

        link.classList.remove("active");

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});


/* ==========================================
   SIMPLE FADE-IN ON SCROLL
========================================== */

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

    ".card, .focus-card, .accordion-item, .contact-card, .cta-box"

).forEach(function(element){

    element.classList.add("hidden");

    observer.observe(element);

});
