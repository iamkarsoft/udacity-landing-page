

// add class to menu
let navLinks = document.querySelectorAll('.nav__links--items a');



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

