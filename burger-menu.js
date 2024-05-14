//burger menu for all except index
const menuHamburger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-list");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
