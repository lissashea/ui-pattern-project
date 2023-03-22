
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

let logos = {};
let directorInfo = {};
let engineInfo = {};


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
      let team = teamsResponse.response[i];
      logos[team.name] = team.logo;
      directorInfo[team.name] = team.director;
      engineInfo[team.name] = team.engine;
    }
    for (let i = 0; i < boxes.length; i++) {
      const info = JSON.parse(boxes[i].dataset.info);
      boxes[i].style.backgroundImage = `url(${logos[info.name]})`;
      boxes[i].style.backgroundSize = 'contain';
      boxes[i].style.backgroundRepeat = 'no-repeat';
      boxes[i].style.backgroundPosition = 'center';
    }
  })
  .catch(err => console.error(err));

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    const info = JSON.parse(this.dataset.info);
    driverOneElement.innerHTML = `Driver 1: ${[info.driver1]}`;
    driverTwoElement.innerHTML = `Driver 2: ${[info.driver2]}`;
    nameElement.innerText = `Team: ${info.name}`;
    rankingElement.innerText = `Ranking: ${info.ranking}`;
    engineElement.innerText = `Engine: ${engineInfo[info.name]}`;
    directorElement.innerText = `Director: ${directorInfo[info.name]}`;
    idElement.innerText = `ID: ${info.id}`;
    
    modal.style.visibility = 'visible';
    const logoUrl = logos[info.name];
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

const apiKey = `FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu`;
const sportsUrl = `https://f1.sportmonks.com/api/v1.0/seasons?api_token=${apiKey}`;

// Define an object to store the data
const f1Data = {};
f1Data.drivers = {};

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  
  // Store the data in the f1Data object
  f1Data.seasons = data.data;
  f1Data.teams = {};
  f1Data.drivers = {};
  
  // Loop through each season and fetch the team and driver data
  for (let i = 0; i < f1Data.seasons.length; i++) {
    const seasonId = f1Data.seasons[i].id;
    const teamsUrl = `https://f1.sportmonks.com/api/v1.0/teams/season/${seasonId}?api_token=${apiKey}`;
    const driversUrl = `https://f1.sportmonks.com/api/v1.0/drivers/season/${seasonId}?api_token=${apiKey}`;

    // Fetch the team data and store it in the f1Data object
    const teamsResponse = await fetch(teamsUrl);
    const teamsData = await teamsResponse.json();
    f1Data.teams[seasonId] = teamsData.data;
    
    // Fetch the driver data and store it in the f1Data object
    const driversResponse = await fetch(driversUrl);
    const driversData = await driversResponse.json();
    f1Data.drivers[seasonId] = driversData.data;
  }
  
  f1Data.teams[seasonId] = teamsData.data;
  f1Data.drivers[seasonId] = driversData.data;
  
  // You could also call a function to update the UI with the data at this point
}

getapi(sportsUrl)
  .then(() => {
    console.log(f1Data.seasons);
    console.log(f1Data.teams);
    console.log(f1Data.drivers);

    console.log(f1Data.seasons);
    console.log(f1Data.teams);
    console.log(f1Data.drivers);
  });
