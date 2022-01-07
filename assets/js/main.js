const images = document.querySelectorAll(".content-slides img");
const prev = document.querySelector("#slide-left");
const next = document.querySelector("#slide-right");
const indicators = document.querySelectorAll(".cercle-indicators");

let index = 0;

const slideSuivant = () => {
    if (index < 2) {
        images[index].classList.remove("active");
        index++;
        images[index].classList.add("active");
    }
};

next.addEventListener("click", slideSuivant);