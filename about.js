
//Favorites Header

var b = 0;
var txt2 = "About." /* Title for Favorites page */
var speedFav = 150; /* The speed/duration of the effect in milliseconds */

typeWriterFav();

function typeWriterFav() {
  if (b < txt2.length) {
    document.getElementById("favHeader").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(typeWriterFav, speedFav);
  }
}


// Hamburger Menu


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navUL");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Hiii")
}

const navLink = document.querySelectorAll(".navUl");

navLink.forEach ( n => n.addEventListener("click", closeMenu));

function closeMe() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}