// ------------------------------------------ //
//        KUNDEANMELDELSER KARRUSEL           //
//                Josefine                    //
// ------------------------------------------ //

// 1. Array med anmeldelser (objekter)
// Et array er en liste.
// Hver anmeldelse er et objekt med tekst, navn og tidspunkt.
const reviews = [
	{
		text: "Vi havde en helt fantastisk weekend hos Bibi! Teltene var hyggelige og klang var spot on!",
		name: "Pernille D.",
		time: "3 måneder siden",
	},
	{
		text: "Et fuldstændig magisk sted. Stilheden, naturen og stemningen var helt unik.",
		name: "Mikkel R.",
		time: "1 måned siden",
	},
	{
		text: "Perfekt getaway! Børnene elskede dyrene og aktiviteterne! Vi kommer helt sikkert igen.",
		name: "Camilla S.",
		time: "2 uger siden",
	},
	{
		text: "God oplevelse, men lidt langt fra stranden. Teltene var til gengæld super gode.",
		name: "Jonas T.",
		time: "4 dage siden",
	},
];

// 2. Variabel til at holde styr på hvilken anmeldelse der vises
// currentIndex fortæller hvilket nummer i arrayet vi er på.
// 0 = første anmeldelse, 1 = anden anmeldelse osv.
let currentIndex = 0;

// 3. Henter elementer fra DOM
const reviewBox = document.getElementById("reviewBox");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const dots = document.getElementsByClassName("dot");

// 4. eventlisteners til knapperne
// Når man klikker på højre pil, skal næste anmeldelse vises.
// Når man klikker på venstre pil, skal forrige anmeldelse vises.
btnRight.addEventListener("click", nextReview);
btnLeft.addEventListener("click", previousReview);

// 5. Her laver vi en funktion, der opdaterer indholdet i reviewBox
function updateReviewBox() {
	const review = reviews[currentIndex]; //lokal vaiabel her.
	reviewBox.innerHTML = `
		<div class="review-text">${review.text}</div> 
    <div class="review-name">${review.name}</div>
    <div class="review-time">${review.time}</div>
	`; //$ får programmet til at forstå, at det skal hente noget fra en variabel og ikke bare skrive det som tekst.

	// Opdater dots
	for (let i = 0; i < dots.length; i++) {
		// går igennem alle prikkerne og fjerne active class fra dem alle.
		dots[i].classList.remove("active");
	}
	// Tilføj "active" til den rigtige dot
	dots[currentIndex].classList.add("active");
}

// 6. Funktion til at vise den næste anmeldelse.
function nextReview() {
	currentIndex++; // Her lægger vi 1 til currentIndex, så vi går én anmeldese frem.
	if (currentIndex >= reviews.length) {
		// Større eller lig med 4
		currentIndex = 0;
	}
	updateReviewBox(); // Opdaterer indholdet i reviewBox. Uden denne, så kommer der ikke ny tekst frem.
}

// 7. Funktion til at vise den forrige anmeldelse.
function previousReview() {
	currentIndex--; // Her trækker vi 1 fra currentIndex, så vi går én anmeldese tilbae.
	if (currentIndex < 0) {
		currentIndex = 3;
	}
	updateReviewBox();
}

// 8. Klik på dots (for-loop!)
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", function () {
		currentIndex = i; // spring direkte til valgt anmeldelse
		showReview(currentIndex);
	});
}

updateReviewBox();
