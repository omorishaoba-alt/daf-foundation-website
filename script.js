/*
    Daniel Asekhame Foundation (DAF Foundation)
    Website Functional Script

    Functions:
    - Mobile navigation
    - Active menu handling
    - Core Values interaction
    - Footer year update
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


                    navbar.classList.toggle("open");


                    menuToggle.classList.toggle("active");


                }
            );



            const menuLinks =
                navbar.querySelectorAll("a");



            menuLinks.forEach(
                function (link) {


                    link.addEventListener(
                        "click",
                        function () {


                            navbar.classList.remove("open");


                            menuToggle.classList.remove("active");


                        }
                    );


                }
            );


        }



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



                        if (valueDescription &&
                            valueContent[selectedValue]) {


                            valueDescription.innerHTML = `

                                <h3>${button.querySelector("h3").textContent}</h3>

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
