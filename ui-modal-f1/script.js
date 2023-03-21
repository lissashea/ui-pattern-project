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
    driverOneElement.innerHTML = `Driver 1: ${info.driver1}`;
    driverTwoElement.innerHTML = `Driver 2: ${info.driver2}`;
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



function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  
  if(input.value.length === 0){
    li.style.display = "none";
    return;
  }else{
    li.style.display = "block";
  }

  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}