// selecting dom elements
const navLinks = document.querySelectorAll('.nav__links--items a');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const toTop = document.querySelector('#scroll__top');


// smooth scrolling
const htmlBody = document.querySelector('html');
htmlBody.style.scrollBehavior = "smooth";

// let activeLink = document.querySelector(".active");
// hide navigation while not scrolling

setTimeout(function() {
    navBar.classList.add("hidden");
}, 3000);


//function for adding class to navigation link

// function addActiveLink() {

//     activeLink = document.querySelector(".active");

//     if (activeLink) {
//         activeLink.classList.remove("active");
//     }

//     this.classList.add("active");

// }

//scroll to section function

// Using event listeners, add a click event to your link (You will have to prevent the default action of a click. This will allow you to change the behaviour. (In this case it will allow you to scroll)


// Remove the active class from any previous links that have been clicked, and any previous section 
// Next add the active style to the section that is in view 
//Add active style to the link that was clicked
// Finally scroll to the section using scrollIntoView()

// adding active class on click of a menu item
navLinks.forEach(function(navLink) {
    // navLink.addEventListener("click", addActiveLink);

    navLink.addEventListener('click', function(e)  {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        let topPos = document.querySelector(href).offsetTop;
        let activeLink = document.querySelector(".active");

        if(activeLink){
            activeLink.classList.remove("active");
        }
        e.target.classList.add("active");



 
  window.scrollTo({top: topPos, behavior: 'smooth'});



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