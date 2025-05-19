console.log("TypeThat.pl");

function incrementScore(id) {
	const input = document.getElementById(id);
	if (input) {
		input.value = parseInt(input.value) + 1;
	}
}

function decrementScore(id) {
	const input = document.getElementById(id);
	if (input && parseInt(input.value) > 0) {
		input.value = parseInt(input.value) - 1;
	}
}

function toggleMenu() {
	nav.classList.toggle('active');
	body.classList.toggle('no-scroll');
	hamburger.classList.toggle('hamburgerAnimation');
}


const body = document.body;
const nav = document.querySelector('.navLinks');
const hamburger = document.querySelector('.hamburger');


const navLi = document.querySelectorAll('.navLi');
console.log(navLi);
navLi.forEach(item => {
	item.addEventListener('click', () =>{
		nav.classList.remove('active');
		body.classList.remove('no-scroll');
		hamburger.classList.remove('hamburgerAnimation');
	})
})