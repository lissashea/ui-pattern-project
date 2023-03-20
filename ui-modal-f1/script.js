const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

const nameElement = document.querySelector('.name');
const teamElement = document.querySelector('.team');
const rankingElement = document.querySelector('.ranking');
const pointsElement = document.querySelector('.points')

const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', function() {
		const info = JSON.parse(this.dataset.info);
		nameElement.innerText = info.name;
		teamElement.innerText = 'Team: ' + info.team;
		pointsElement.innerText = 'Points' + info.points
		rankingElement.innerText = 'Ranking: ' + info.ranking;
		modal.style.visibility = 'visible';
	});
}

closeButton.addEventListener('click', function() {
	modal.style.visibility = 'hidden';
});

window.addEventListener('click', function(event) {
	if (event.target == modal) {
		modal.style.visibility = 'hidden';
	}
});

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "0d2ffc6293msh1075b39e5ce7c58p1b3558jsneeff180a0616");
myHeaders.append("x-rapidapi-host", "v1.formula-1.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.formula-1.api-sports.io/seasons", requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log('error', error));
