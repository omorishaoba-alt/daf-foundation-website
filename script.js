document.addEventListener("DOMContentLoaded", function () {



/*
CORE VALUES EXPANDER
*/


const valueDescriptions = {


"Integrity":
"Integrity is the foundation of everything we do at the Daniel Asekhame Foundation. We are committed to honesty, fairness, ethical conduct and respect in all our actions and decisions. We uphold the highest standards of professionalism, ensuring that our programmes and partnerships are guided by transparency, responsibility and a genuine commitment to serving humanity. By acting with integrity, we build lasting trust with our beneficiaries, donors, partners and the communities we serve.",



"Accountability":
"At the Daniel Asekhame Foundation, accountability is one of our core values. We are committed to managing all resources with honesty, integrity and transparency. Every donation, partnership and contribution entrusted to us is used responsibly to achieve meaningful and measurable impact in the communities we serve.",



"Compassion":
"Compassion is at the heart of the Daniel Asekhame Foundation. We are driven by a genuine concern for the well-being of others and a commitment to serving with kindness, empathy and dignity. We strive to bring hope, support and opportunities to vulnerable individuals and communities.",



"Transparency":
"Transparency is a guiding principle of the Daniel Asekhame Foundation. We are committed to openness in our operations, decision-making and use of resources. We provide clear information about our programmes, finances and impact, ensuring that donors, partners, beneficiaries and the public can have confidence in our work.",



"Excellence":
"Excellence is a core value of the Daniel Asekhame Foundation. We are committed to delivering high-quality programmes and services that create lasting impact through innovation, professionalism and continuous improvement.",



"Inclusion":
"The Daniel Asekhame Foundation believes that everyone deserves equal opportunities to thrive, regardless of age, gender, disability, ethnicity, religion or socio-economic background.",



"Service to Humanity":
"Service to humanity is the driving force behind the Daniel Asekhame Foundation. We are dedicated to improving lives through selfless service, compassion and sustainable community development.",



"Respect for Human Dignity":
"The Daniel Asekhame Foundation believes that every person deserves to be treated with dignity, respect and compassion.",



"Innovation":
"Innovation is central to the Daniel Asekhame Foundation's approach to creating lasting social impact. We embrace creative ideas, modern technology and evidence-based solutions.",



"Sustainable Development":
"The Daniel Asekhame Foundation is committed to promoting sustainable development by creating solutions that meet the needs of today without compromising future generations."

};



const valueButtons = document.querySelectorAll(".values-grid button");



valueButtons.forEach(function(button){


button.addEventListener("click", function(){


const valueName = this.textContent.trim();



const existing = this.nextElementSibling;



if(existing && existing.classList.contains("value-description")){


existing.remove();


return;


}



const box = document.createElement("div");


box.className = "value-description";


box.innerHTML = 
"<p>" + valueDescriptions[valueName] + "</p>";



this.parentNode.insertBefore(
box,
this.nextSibling
);



});


});






/*
HERO SLIDER
*/


const slides = document.querySelectorAll(".slide");


let currentSlide = 0;



if(slides.length > 0){


setInterval(function(){


slides[currentSlide].classList.remove("active");


currentSlide++;


if(currentSlide >= slides.length){

currentSlide = 0;

}



slides[currentSlide].classList.add("active");



},5000);


}






/*
SMOOTH INTERNAL LINKS
*/


const links = document.querySelectorAll('a[href^="#"]');



links.forEach(function(link){


link.addEventListener("click", function(event){


const target = document.querySelector(
this.getAttribute("href")
);



if(target){


event.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});






/*
SIMPLE DONATION MESSAGE
*/


window.showDonationMessage = function(){


alert(
"Thank you for supporting the Daniel Asekhame Foundation. Donation payment details will be provided shortly."
);


};




});
