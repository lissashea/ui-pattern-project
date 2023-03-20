const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

const nameElement = document.querySelector('.name');
const teamElement = document.querySelector('.team');
const rankingElement = document.querySelector('.ranking');
const pointsElement = document.querySelector('.points')

const boxes = document.querySelectorAll('.box');

let logoUrls = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d2ffc6293msh1075b39e5ce7c58p1b3558jsneeff180a0616',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

fetch('https://api-formula-1.p.rapidapi.com/teams', options)
	.then(response => response.json())
	.then(response => {
		let teamsResponse = response;
		console.log(teamsResponse);
		for (let i = 0; i < teamsResponse.response.length; i++) {
			let teamLogo = teamsResponse.response[i].logo;
			logoUrls.push(teamLogo);
		}
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].style.backgroundImage = `url(${logoUrls[i]})`;
			boxes[i].style.backgroundSize = 'contain';
			boxes[i].style.backgroundRepeat = 'no-repeat';
			boxes[i].style.backgroundPosition = 'center';
		}
	})
	.catch(err => console.error(err));

for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', function() {
		const info = JSON.parse(this.dataset.info);
		nameElement.innerText = info.name;
		teamElement.innerText = 'Team: ' + info.team;
		pointsElement.innerText = 'Points: ' + info.points;
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
