// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
    dots[i].classList.toggle("active", i === slideIndex);
    dots[i].setAttribute("aria-selected", i === slideIndex ? "true" : "false");
    dots[i].tabIndex = i === slideIndex ? 0 : -1;
  });
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetTimer();
  });
  dot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showSlide(i);
      resetTimer();
    }
  });
});

let slideTimer = setInterval(nextSlide, 5000);

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 5000);
}

// Initialize slideshow
showSlide(slideIndex);

// Dynamically set current year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
