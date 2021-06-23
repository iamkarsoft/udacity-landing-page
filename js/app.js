

// add class to menu
let navLinks = document.querySelectorAll('.nav__links--items a');
const home = document.querySelector('a[href="#content"]');
const about = document.querySelector('a[href="#about"]');
const services = document.querySelector('a[href="#services"]');
const contact = document.querySelector('a[href="#contact"]');



// loop over all links in navbar__menu
for (const navLink of navLinks) {
  navLink.addEventListener("click", clickMenu);
}


function clickMenu(e){

const previousActive = document.querySelector(".active");
	
	if(previousActive){
		previousActive.classList.remove("active");
	}

	this.classList.add("active");
}



window.addEventListener('scroll',function(){
	const previousActive = document.querySelector(".active");


if(window.scrollY < 500  ){
	if(previousActive){
		previousActive.classList.remove("active");
	}
	home.classList.add("active");

}else if(window.scrollY < 1000){
	if(previousActive){
		previousActive.classList.remove("active");
	}
	about.classList.add("active");
}else if(window.scrollY < 1400){

	if(previousActive){
		previousActive.classList.remove("active");
	}

	services.classList.add("active");
}else if(window.scrollY < 2000){

	if(previousActive){
		previousActive.classList.remove("active");
	}

	contact.classList.add("active");
}


});

