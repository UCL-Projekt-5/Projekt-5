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

const displayPrice = document.getElementById("displayPrice");
const tentContainers = document.getElementsByClassName("bookTentContainer");

const checkIn = document.getElementById("checkin");
const checkOut = document.getElementById("checkout");
const guests = document.getElementById("guests");

const checkboxes = document.getElementsByClassName("checkbox");
