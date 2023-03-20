// Get the modal element
let modal = document.querySelector('.modal');
// Get the close button element
let closeButton = document.querySelector('.close-button');

// Add event listeners to all the boxes
let boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
	// Add an event listener to each box
	boxes[i].addEventListener('click', function() {
		// Get the info from the data attribute
		let info = JSON.parse(this.dataset.info);
		// Populate the modal with the info
		let nameElement = document.querySelector('.name');
		let ageElement = document.querySelector('.age');
		let occupationElement = document.querySelector('.occupation');
		nameElement.innerText = info.name;
		ageElement.innerText = 'Age: ' + info.age;
		occupationElement.innerText = 'Occupation: ' + info.occupation;
		// Show the modal
		modal.style.visibility = 'visible';
	});
}

// Add event listener to the close button
closeButton.addEventListener('click', function() {
	// Hide the modal
	modal.style.visibility = 'hidden';
});

// Hide the modal when clicking outside of it
window.addEventListener('click', function(event) {
	if (event.target == modal) {
		modal.style.visibility = 'hidden';
	}
});


//driver api 
const driver = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d2ffc6293msh1075b39e5ce7c58p1b3558jsneeff180a0616',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

fetch('https://api-formula-1.p.rapidapi.com/drivers?search=lewi', driver)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//team api
const team = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d2ffc6293msh1075b39e5ce7c58p1b3558jsneeff180a0616',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

fetch('https://api-formula-1.p.rapidapi.com/drivers?search=lewi', team)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


//team ranking
const teamRankings = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d2ffc6293msh1075b39e5ce7c58p1b3558jsneeff180a0616',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

fetch('https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021', teamRankings)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));