const items = document.querySelectorAll('.item');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const breedSelect = document.querySelector('#breed-select');
const breed = breedSelect.value;

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

// select the paragraph element in the HTML
const breedInfo = document.querySelector("#breed-info");

// loop through each img element and update its src attribute with a new image URL
breedSelect.addEventListener('change', () => {
  const breed = breedSelect.value;
  images.forEach((img) => {
    if (breed === 'terrier/junie-moon') {
      img.src = 'file:///Users/lissawarshaw/Desktop/repos/projects/ui-pattern-project/ui-hamburger/images/june.jpg';
      breedInfo.textContent = "Junie Moon is a cute and friendly terrier.";
    } else {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          img.src = data.message;
          // new API key for info on breeds
          
          fetch(`https://api.api-ninjas.com/v1/dogs?name=${breed}`, {
            headers: {
              'X-Api-Key': '+8G5Aam635HpQkQQJjLh7A==ygeJ5wwFvYckx6PA'
            }
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const breedInfoText = data[0].energy;

              breedInfo.innerHTML = `energy of ${breed} is: ${breedInfoText}`;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});
