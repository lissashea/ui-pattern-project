const items = document.querySelectorAll('.item');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

const breedSelect = document.querySelector('#breed-select');
const breed = breedSelect.value
console.log(breed)

items.forEach(item => {
  item.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modal.classList.add('active');
    const h2 = modal.querySelector('#breed-name');
    const breed = breedSelect.value; // get the selected breed from the dropdown
    h2.innerHTML = breed;
  });
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modal.classList.remove('active');
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modal.classList.remove('active');
});

// select all the img elements in the HTML
const images = document.querySelectorAll(".item img");

// loop through each img element and update its src attribute with a new image URL
breedSelect.addEventListener('change', () => {
  const breed = breedSelect.value;
  images.forEach((img) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        img.src = data.message;
        const h2 = img.parentElement.querySelector("h2");
        h2.innerHTML = breed;
      })
      .catch((error) => {
        console.log(error);
      });
  }); 
});
