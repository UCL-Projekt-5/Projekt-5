// ------------------------------------------ //
//        KUNDEANMELDELSER KARRUSEL           //
//                Josefine                    //
// ------------------------------------------ //
// 1. Hent HTML-elementer
const reviewBox = document.getElementById("reviewBox");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const dots = document.getElementsByClassName("dot");

// 2. Array med anmeldelser (objekter)
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

// 3. Variabel til at holde styr på den aktuelle anmeldelse
let currentIndex = 0;

// 4. Funktion til at opdatere anmeldelsesboksen
function updateReviewBox() {
	const review = reviews[currentIndex]; //lokal variabel her.
	reviewBox.innerHTML = `
		<p class="review-text">${review.text}</p> 
    <b class="review-name">${review.name}</b>
    <p class="review-time">${review.time}</p>
	`;
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	dots[currentIndex].classList.add("active");
}

// 5. Funktion til at vise den næste anmeldelse.
function nextReview() {
	currentIndex++;
	if (currentIndex >= reviews.length) {
		// Større eller lig med 4
		currentIndex = 0;
	}
	updateReviewBox();
}

// 6. Funktion til at vise den forrige anmeldelse.
function previousReview() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = 3;
	}
	updateReviewBox();
}

// 7. eventlisteners til knapperne
btnRight.addEventListener("click", nextReview);
btnLeft.addEventListener("click", previousReview);

// 8. Eventlisteners til prikkerne
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", function () {
		currentIndex = i; // spring direkte til valgt anmeldelse
		updateReviewBox();
	});
}

updateReviewBox();
