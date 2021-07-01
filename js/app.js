// selecting dom elements
const navContainer = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links--items a');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const toTop = document.querySelector('#scroll__top');


//building menu links
const nav = `
 <li class="nav__links--items"><a href="#banner">Home</a></li>
<li class="nav__links--items"><a href="#about">About Us</a></li>
<li class="nav__links--items"><a href="#services">Services</a></li>
<li class="nav__links--items"><a href="#contact">Contact</a></li>`;


// appending menu links to menu container
navContainer.insertAdjacentHTML('afterbegin',nav);



// smooth scrolling
const htmlBody = document.querySelector('html');
htmlBody.style.scrollBehavior = "smooth";

// let activeLink = document.querySelector(".active");
// hide navigation while not scrolling

setTimeout(function() {
    navBar.classList.add("hidden");
}, 3000);




// adding active class on click of a menu item
navLinks.forEach(function(navLink) {
    // navLink.addEventListener("click", addActiveLink);

    navLink.addEventListener('click', function(e) {

        //prevent default click action
        e.preventDefault();

        // get section name 
        let href = e.target.getAttribute('href');

        // get the distance of the section to scrll to
        let topPos = document.querySelector(href).offsetTop;

        // check if existing active link and remove them
        let activeLink = document.querySelector(".active");

        if (activeLink) {
            activeLink.classList.remove("active");
        }

        //add active state to the clicked link
        e.target.classList.add("active");



        // scroll to clicked section with a smooth behavior
        window.scrollTo({ top: topPos, behavior: 'smooth' });



    });

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


    //logic for adding active class to corresponding section link

    sections.forEach(function(section) {

        //getting information about scroll position
        const position = section.getBoundingClientRect();

        // checking  of position of the scroll is in the section

        if ((position.left >= position.top) && (position.left <= position.bottom)) {

            // getting then name of the data attribute
            const linkSection = section.getAttribute('data-section');

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