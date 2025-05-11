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
