const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Add your images here
const images = [
  "/Users/lissawarshaw/Desktop/repos/projects/ui-pattern-project/ui-slider/images/june3.jpeg",
  "/Users/lissawarshaw/Desktop/repos/projects/ui-pattern-project/ui-slider/images/june4.jpeg",
  "/Users/lissawarshaw/Desktop/repos/projects/ui-pattern-project/ui-slider/images/june5.jpeg",
];

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  updateSlider();
}

function nextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
