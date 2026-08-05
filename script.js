
/*
    Daniel Asekhame Foundation (DAF Foundation)
    Website Functional Script

    Functions:
    - Mobile navigation
    - Active menu handling
    - Core interaction support
    - Smooth user experience
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const menuToggle =
            document.getElementById("menu-toggle");


        const navbar =
            document.getElementById("navbar");



        /*
            MOBILE MENU
        */


        if (menuToggle && navbar) {


            menuToggle.addEventListener(
                "click",
                function () {


                    navbar.classList.toggle(
                        "open"
                    );


                    menuToggle.classList.toggle(
                        "active"
                    );


                }
            );



            const menuLinks =
                navbar.querySelectorAll("a");



            menuLinks.forEach(
                function (link) {


                    link.addEventListener(
                        "click",
                        function () {


                            navbar.classList.remove(
                                "open"
                            );


                            menuToggle.classList.remove(
                                "active"
                            );


                        }
                    );


                }
            );


        }



        /*
            CORE VALUES INTERACTION

            Supports expandable value
            descriptions where buttons
            use data-value attributes.
        */


        const valueButtons =
            document.querySelectorAll(
                "[data-value]"
            );



        valueButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const target =
                            document.getElementById(
                                button.dataset.value
                            );



                        if (target) {


                            target.classList.toggle(
                                "show"
                            );


                        }


                    }
                );


            }
        );



        /*
            SIMPLE SCROLL REVEAL
            Keeps experience elegant
            without heavy libraries.
        */


        const revealElements =
            document.querySelectorAll(
                ".programme-card, .value-item, .roadmap-card"
            );



        const observer =
            new IntersectionObserver(
                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (entry.isIntersecting) {


                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );


                            }


                        }
                    );


                },
                {
                    threshold: 0.15
                }
            );



        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );



        /*
            CURRENT YEAR FOOTER UPDATE
        */


        const yearElements =
            document.querySelectorAll(
                ".current-year"
            );



        yearElements.forEach(
            function (element) {


                element.textContent =
                    new Date().getFullYear();


            }
        );


    }
);
