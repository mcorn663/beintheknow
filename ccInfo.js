/* Typing Text on Headers*/

var i = 0;
var txt = "Be  In  The  Know  ." /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainHeader").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


//Add Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navUL");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("hiii");
}

const navLink = document.querySelectorAll(".navUl");

navLink.forEach ( n => n.addEventListener("click", closeMenu));

function closeMe() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
