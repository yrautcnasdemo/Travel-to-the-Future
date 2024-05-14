// let play = document.getElementById("play");

// function playMusic(){
//     let audio = HTMLMediaElement = url("https://youtu.be/T3mCj2u3XSY");
//     audio.play()
// }
// play.addEventListener("click", playMusic);


////////////// Main Slider//////////////////
const buttons = document.querySelectorAll(".btn-carousel");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;

    slides[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});


////////////// 1sub Slider//////////////////
const buttons1 = document.querySelectorAll(".btn-carousel1");
const slides1 = document.querySelectorAll(".slide1");

buttons1.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide1 = e.target.id === "next1" ? 1 : -1;
    const slideActive1 = document.querySelector(".active1");

    newIndex1 = calcNextSlide1 + [...slides1].indexOf(slideActive1);

    if (newIndex1 < 0) newIndex1 = [...slides1].length - 1;
    if (newIndex1 >= [...slides1].length) newIndex1 = 0;

    slides1[newIndex1].classList.add("active1");
    slideActive1.classList.remove("active1");
  });
});

////////////// 2nd Slider//////////////////
const buttons2 = document.querySelectorAll(".btn-carousel2");
const slides2 = document.querySelectorAll(".slide2");

buttons2.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide2 = e.target.id === "next2" ? 1 : -1;
    const slideActive2 = document.querySelector(".active2");

    newIndex2 = calcNextSlide2 + [...slides2].indexOf(slideActive2);

    if (newIndex2 < 0) newIndex2 = [...slides2].length - 1;
    if (newIndex2 >= [...slides2].length) newIndex2 = 0;

    slides2[newIndex2].classList.add("active2");
    slideActive2.classList.remove("active2");
  });
});



//burger menu for all except index

const menuHamburger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-list");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
