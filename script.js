/*
    Daniel Asekhame Foundation (DAF Foundation)
    Website Functional Script v1.5

    Functions:
    - Premium mobile navigation
    - Navigation accessibility
    - Core Values interaction
    - Footer year update
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {



        /*
            MOBILE OFF-CANVAS NAVIGATION
        */


        const menuToggle =
            document.getElementById(
                "menu-toggle"
            );


        const mobileMenu =
            document.getElementById(
                "mobile-menu"
            );


        const menuOverlay =
            document.getElementById(
                "menu-overlay"
            );


        const closeMenu =
            document.getElementById(
                "close-menu"
            );



        function openMenu() {


            if (!mobileMenu) return;


            mobileMenu.classList.add(
                "active"
            );


            if (menuOverlay) {


                menuOverlay.classList.add(
                    "active"
                );


            }



            if (menuToggle) {


                menuToggle.classList.add(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );


            }



            document.body.classList.add(
                "menu-open"
            );


        }





        function closeMobileMenu() {


            if (mobileMenu) {


                mobileMenu.classList.remove(
                    "active"
                );


            }



            if (menuOverlay) {


                menuOverlay.classList.remove(
                    "active"
                );


            }



            if (menuToggle) {


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


            }



            document.body.classList.remove(
                "menu-open"
            );


        }





        if (menuToggle) {


            menuToggle.addEventListener(
                "click",
                function () {


                    if (
                        mobileMenu &&
                        mobileMenu.classList.contains(
                            "active"
                        )
                    ) {


                        closeMobileMenu();


                    } else {


                        openMenu();


                    }


                }
            );


        }

    
        /*
            CLOSE BUTTON
        */


        if (closeMenu) {


            closeMenu.addEventListener(
                "click",
                function () {


                    closeMobileMenu();


                }
            );


        }




        /*
            OVERLAY CLOSE
        */


        if (menuOverlay) {


            menuOverlay.addEventListener(
                "click",
                function () {


                    closeMobileMenu();


                }
            );


        }




        /*
            CLOSE MENU AFTER NAVIGATION
        */


        if (mobileMenu) {


            const menuLinks =
                mobileMenu.querySelectorAll(
                    "a"
                );



            menuLinks.forEach(
                function (link) {


                    link.addEventListener(
                        "click",
                        function () {


                            closeMobileMenu();


                        }
                    );


                }
            );


        }





        /*
            ESCAPE KEY CLOSE
            ACCESSIBILITY SUPPORT
        */


        document.addEventListener(
            "keydown",
            function (event) {


                if (
                    event.key === "Escape" &&
                    mobileMenu &&
                    mobileMenu.classList.contains(
                        "active"
                    )
                ) {


                    closeMobileMenu();


                }


            }
        );





        /*
            CORE VALUES INTERACTION

            Updates the description panel
            when value buttons are selected.
        */


        const valueButtons =
            document.querySelectorAll(
                ".value-card"
            );


        const valueDescription =
            document.getElementById(
                "value-description"
            );



        const valueContent = {


            integrity:
                "Integrity is the foundation of everything we do at the Daniel Asekhame Foundation. We are committed to honesty, fairness, ethical conduct and respect in all our actions and decisions.",



            accountability:
                "We accept responsibility for our actions, programmes and commitments while maintaining transparency with our beneficiaries, partners and communities.",



            compassion:
                "We serve humanity with empathy, understanding and genuine concern for the wellbeing of individuals and communities.",



            transparency:
                "We maintain openness, honesty and clear communication in all our activities and partnerships.",



            excellence:
                "We pursue the highest standards of quality, professionalism and continuous improvement in our service delivery.",



            inclusion:
                "We promote equal opportunity and ensure that individuals from all backgrounds can participate and benefit from our initiatives.",



            service:
                "We are committed to selfless service and creating positive impact that improves human lives.",



            dignity:
                "We respect the inherent worth, rights and dignity of every individual we serve.",



            innovation:
                "We encourage creative ideas, research and practical solutions that address community challenges.",



            sustainability:
                "We develop programmes that create lasting benefits for communities and future generations."

        };

    
        valueButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {



                        valueButtons.forEach(
                            function (item) {


                                item.classList.remove(
                                    "active"
                                );


                            }
                        );



                        button.classList.add(
                            "active"
                        );



                        const selectedValue =
                            button.dataset.value;



                        if (
                            valueDescription &&
                            valueContent[selectedValue]
                        ) {



                            valueDescription.innerHTML = `

                                <h3>
                                    ${button.querySelector("h3").textContent}
                                </h3>


                                <p>
                                    ${valueContent[selectedValue]}
                                </p>

                            `;


                        }



                    }
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

