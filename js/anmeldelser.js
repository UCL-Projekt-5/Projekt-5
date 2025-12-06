// ------------------------------------------ //
//        KUNDEANMELDELSER KARRUSEL           //
//                Josefine                    //
// ------------------------------------------ //

//  Array med anmeldelser (objekter)
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
let currentIndex = 0;

// 3. Henter elementer fra DOM
