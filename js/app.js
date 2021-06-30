// selecting dom elements
const navLinks = document.querySelectorAll('.nav__links--items a');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const toTop = document.querySelector('#scroll__top');
let activeLink = document.querySelector(".active");
// hide navigation while not scrolling

setTimeout(function() {
    navBar.classList.add("hidden");
}, 3000);


//function for adding class to navigation link

function addActiveLink(){

	activeLink = document.querySelector(".active");

        if (activeLink) {
            activeLink.classList.remove("active");
        }

        this.classList.add("active");
}
// adding active class on click of a menu item
navLinks.forEach(function(navLink){
    navLink.addEventListener("click", addActiveLink);
})

/**
 * function to check if scroll is in section
 * source https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
 * modified for my understanding
 */

function isInViewport(element) {
    const position = element.getBoundingClientRect();
    return (
        position.top >= 0 &&
        position.left >= 0 &&
        position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        position.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// on scoll events


window.addEventListener('scroll', function() {
    //show navigation on scroll

    navBar.classList.remove("hidden")

    // show scroll to top button
    // !todo 
    // if ((window.innerHeigth + window.scrollY) >= document.body.offsetHeight) {
    //     toTop.style.display = "initial"
    // }


    //logic for adding active class to corresponding section link

    sections.forEach(function(section) {

    		//getting information about scroll position
        const position = section.getBoundingClientRect();

        //storing section info into a variable
        const linkSection = section.getAttribute('data-section');

        if (isInViewport(section)) {
             activeLink = document.querySelector(".active");

            if (activeLink) {
                activeLink.classList.remove("active");
            }


            // matching navigation links to in section data attribute
            const navLink = document.querySelector(`.nav__links--items a[href="#${linkSection}"]`)
            navLink.classList.add("active");

        }
    });

})