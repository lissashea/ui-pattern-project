// Get the modal element
var modal = document.querySelector('.modal');
// Get the close button element
var closeButton = document.querySelector('.close-button');

// Add event listeners to all the boxes
var boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
	// Add an event listener to each box
	boxes[i].addEventListener('click', function() {
		// Get the info from the data attribute
		var info = JSON.parse(this.dataset.info);
		// Populate the modal with the info
		var nameElement = document.querySelector('.name');
		var ageElement = document.querySelector('.age');
		var occupationElement = document.querySelector('.occupation');
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
