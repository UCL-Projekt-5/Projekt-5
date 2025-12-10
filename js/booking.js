/**
 * Todo
 * * Slut af med at have et booking system der kan udregne prisen for ens ophold og indsætte det på siden.
 * * Når man trykker på et telt så bliver det valgt. active class bliver tilføjet til teltets bookTentContainer
 * * Data der skal indsamles
 * Antal gæster, hvis mere end 4 så + 300 kr per mængde over 4
 * Ankomst og afrejse, udregne pris i alt, også tag i mende om det er lav sæson eller høj sæson
 * Ekstra tilkøb
 *
 */

const form = document.getElementById("bookingForm");
const displayPrice = document.getElementById("displayPrice");
const tentContainers = document.getElementsByClassName("bookTentContainer");

form.addEventListener("change", mathTotalPrice);

for (let i = 0; i < tentContainers.length; i++) {
  tentContainers[i].addEventListener("click", function () {
    for (let j = 0; j < tentContainers.length; j++) {
      tentContainers[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

/**
 * The function calculates the number of days between two given dates.
 * @param startDate - The `startDate` parameter is the starting date for which you want to calculate
 * the number of days.
 * @param endDate - The `endDate` parameter is the date that marks the end of the time period for which
 * you want to calculate the number of days.
 * @returns The function `calculateDays` takes two date parameters, `startDate` and `endDate`,
 * calculates the difference in days between the two dates, and returns the number of days as a
 * floating-point number.
 *
 * Funktionen er fået fra dette link https://www.geeksforgeeks.org/javascript/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
 */
function calculateDays(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let timeDifference = end - start;
  let daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference;
}

/**
 * For at gøre det nemmere for mig at finde frem til den rigtige pris, så har jeg ændret lavsæsonen til at inkludere hele juni måned. Samt at tage weekender og helligdage til også at koste det samme som lavsæson i lavsæsonen.
 * Så min lavsæson hedder 1. april - 31. juni og fra 1. september - 30. september
 * Der koster det 1495 kr for første nat og 1350 kr efterfølgende nætter
 *
 * Og min Højsæson hedder 1. juli - 31. august
 * Der koster det 1795 kr for første nat og 1600 kr efterfølgende nætter
 */
const seasonPrices = [
  { season: "lowSeason", month: 4 },
  { season: "lowSeason", month: 5 },
  { season: "lowSeason", month: 6 },
  { season: "highSeason", month: 7 },
  { season: "highSeason", month: 8 },
  { season: "lowSeason", month: 9 },
];

function mathTotalPrice() {
  // Info fra form
  let checkIn = document.getElementById("checkin").value; // input er i dette format 2025-12-16
  let checkOut = document.getElementById("checkout").value;
  let guests = document.getElementById("guests").value;

  let checkboxes = document.getElementsByClassName("checkboxData");

  let totalPrice = 0;
  //Price for guests
  if (guests == 5) {
    totalPrice += 300;
  } else if (guests == 6) {
    totalPrice += 600;
  }
  // Price for amount of days
  let days = calculateDays(checkIn, checkOut);
  for (let i = 0; i < days; i++) {
    let currentDate = new Date(checkIn);
    currentDate.setDate(currentDate.getDate() + i);
    let currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
    if (
      currentMonth === 4 ||
      currentMonth === 5 ||
      currentMonth === 6 ||
      currentMonth === 9
    ) {
      if (i === 0) {
        totalPrice += 1495; // First night in low season
      }
      if (i > 0) {
        totalPrice += 1350;
      }
    } else if (currentMonth === 7 || currentMonth === 8) {
      if (i === 0) {
        totalPrice += 1795; // First night in high season
      }
      if (i > 0) {
        totalPrice += 1600;
      }
    }
  }
  // Price for extras
  let extrasCount = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i].checked);
    if (checkboxes[i].checked) {
      extrasCount = extrasCount + 1;
    }
  }
  totalPrice = totalPrice + extrasCount * 50;
  console.log(totalPrice);

  displayPrice.innerText = totalPrice + " kr.";
}

mathTotalPrice();
