let play = document.getElementById("play");

function playMusic(){
    let audio = HTMLMediaElement = url("https://youtu.be/T3mCj2u3XSY");
    audio.play()
}
play.addEventListener("click", playMusic);



const buttons = document.querySelectorAll(".btn-carousel");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1;
        const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

        if (newIndex < 0) newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) newIndex = 0;

        slides[newIndex].classList.add("active");
        slideActive.classList.remove("active");
        
    });
});
