const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const boxes = document.querySelectorAll('.box');

const nameElement = document.querySelector('.name');
const rankingElement = document.querySelector('.ranking');
const engineElement = document.querySelector('.engine');
const directorElement = document.querySelector('.director');
const driverOneElement = document.querySelector(".driver1");
const driverTwoElement = document.querySelector(".driver2");
const idElement = document.querySelector(".id");

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
    driverOneElement.innerHTML = `Driver 1: ${info.driver1}`;
    driverTwoElement.innerHTML = `Driver 2: ${info.driver2}`;
    nameElement.innerText = `Team: ${info.name}`;
    rankingElement.innerText = `Ranking: ${info.ranking}`;
    engineElement.innerText = `Engine: ${info.engine}`;
    directorElement.innerText = `Director: ${info.director}`;
    idElement.innerText = `ID: ${info.id}`;
    
    modal.style.visibility = 'visible';
    const logoUrl = logoUrls[i];
    const teamLogo = document.querySelector('.team-logo');
    teamLogo.src = logoUrl;
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
