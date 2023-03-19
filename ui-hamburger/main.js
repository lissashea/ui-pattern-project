		
		const items = document.querySelectorAll('.item');
		const modalOverlay = document.querySelector('.modal-overlay');
		const modal = document.querySelector('.modal');
		const modalClose = document.querySelector('.modal-close');

		items.forEach(item => {
			item.addEventListener('click', () => {
				modalOverlay.classList.add('active');
				modal.classList.add('active');
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
images.forEach((img) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      img.src = data.message; // update the src attribute with the new image URL
    })
    .catch((error) => {
      console.log(error); // handle any errors
    });
});
