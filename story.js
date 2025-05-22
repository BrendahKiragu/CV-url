let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
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

let slideTimer = setInterval(nextSlide, 5000);

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 5000);
}

// Start slideshow once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
