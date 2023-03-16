// // Get the modal
// newFunction();
// function newFunction() {
//   const modal = document.getElementById("modal");

//   // Get the button that opens the modal
//   const btn = document.getElementById("modal-btn");

//   // Get the <span> element that closes the modal
//   const span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal
//   btn.onclick = function () {
//     modal.style.display = "block";
//   };

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };

  // Get the form and add an event listener for form submission
//   const form = document.getElementById("weather-form");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const location = document.getElementById("location").value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const details = document.getElementById("weather-details");
//         details.innerHTML = `
//         <h2>Weather Details for ${data.name}</h2>
//         <p>Temperature: ${data.main.temp}&deg;C</p>
//         <p>Description: ${data.weather[0].description}</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//       `;
//       })
//       .catch((error) => console.log(error));
//   });
// }


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
