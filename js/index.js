const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;
const slideWidth = images[0].clientWidth;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
