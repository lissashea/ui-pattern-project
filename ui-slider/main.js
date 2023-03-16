// const slider = document.getElementById('slider');
// // const prevButton = document.getElementById('prev');
// // const nextButton = document.getElementById('next');

// let currentIndex = 0;

// // Add your images here
// const images = 
//   "https://imgur.com/daJaWEd",
// //   "https://imgur.com/dxeIlF3",
// //   "https://imgur.com/0eNdWiN",
// // ];

// function updateSlider() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function prevImage() {
//   if (currentIndex === 0) {
//     currentIndex = images.length - 1;
//   } else {
//     currentIndex--;
//   }
//   updateSlider();
// }

// function nextImage() {
//   if (currentIndex === images.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   updateSlider();
// }

// prevButton.addEventListener('click', prevImage);
// nextButton.addEventListener('click', nextImage);
const sliderImages = document.querySelectorAll('.slider-container img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach(img => img.classList.remove('active'));
  sliderImages[index].classList.add('active');
}

function nextImage() {
  if (currentIndex === sliderImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showImage(currentIndex);
}

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = sliderImages.length - 1;
  } else {
    currentIndex--;
  }
  showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

showImage(currentIndex);
