const images = document.querySelectorAll(".content-slides img");
const prev = document.querySelector("#slide-left");
const next = document.querySelector("#slide-right");
const indicators = document.querySelectorAll(".cercle-indicators");

let index = 0;

const nextSlide = () => {
    if (index < images.length - 1) {
        images[index].classList.remove("active");
        index++;
        images[index].classList.add("active");
    } else {
        images[index].classList.remove("active");
        index = 0;
        images[index].classList.add("active");
    }
};

const prevSlide = () => {
    if (index > 0) {
        images[index].classList.remove("active");
        index--;
        images[index].classList.add("active");
    } else if (index === 0) {
        images[index].classList.remove("active");
        index = images.length - 1;
        images[index].classList.add("active");
    }
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);