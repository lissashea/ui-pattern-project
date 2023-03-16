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
const slider = document.getElementById('slider');

// Add the image file path here
const image = "https://imgur.com/daJaWEd";

function updateSlider() {
  slider.innerHTML = `<img src="${image}">`;
}

updateSlider();
