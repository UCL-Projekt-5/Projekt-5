// -------------------------------------- //
//        Event oversigt KARRUSEL         //
//                Dicte                   //
// -------------------------------------- //
const dates = [
  { page: 1, date: "2. Januar", time: "14:00-15:00" },
  { page: 1, date: "3. Januar", time: "14:45-16:30" },
  { page: 1, date: "4. Januar", time: "15:00-16:30" },
  { page: 1, date: "5. Januar", time: "14:15-15:00" },
  { page: 1, date: "6. Januar", time: "14:00-15:00" },
  { page: 1, date: "7. Januar", time: "17:00-18:30" },

  { page: 2, date: "9. Januar", time: "14:00-15:00" },
  { page: 2, date: "10. Januar", time: "14:45-16:30" },
  { page: 2, date: "11. Januar", time: "15:00-16:30" },
  { page: 2, date: "12. Januar", time: "14:15-15:00" },
  { page: 2, date: "13. Januar", time: "14:00-15:00" },
  { page: 2, date: "14. Januar", time: "17:00-18:30" },
];

// 7. JANUAR | 17:00-18:30  | ||

const dateElements = document.getElementsByClassName("event-card__date");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", previous);
rightArrow.addEventListener("click", next);

let currentPage = 1;

function changeDates() {
  let index = 0; // bruges til at udfylde dateElements én for én

  // Gennemgå alle dates
  for (let i = 0; i < dates.length; i++) {
    if (dates[i].page === currentPage) {
      if (index < dateElements.length) {
        dateElements[index].innerHTML = `${dates[i].date} | ${dates[i].time}`; // Note: Dollartegn og backticks bruges til template literals, så JavaScript kan indsætte variabler direkte i teksten. Dette er anvendt efter vejledning fra gruppemedlem Tiffany.
        index++;
      }
    }
  }
}

function previous() {
  if (currentPage === 2) {
    // kunne ha været >, men vi har kun 2 sider
    currentPage--; // dette betyder currentPage = currentPage - 1
    changeDates();
    leftArrow.classList.add("inactive");
    rightArrow.classList.remove("inactive");
  }
}
function next() {
  if (currentPage === 1) {
    currentPage++; // dette betyder currentPage = currentPage + 1
    changeDates();
    leftArrow.classList.remove("inactive");
    rightArrow.classList.add("inactive");
  }
}
