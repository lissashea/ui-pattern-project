const apiKey = `FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu`
const sportsUrl = `https://f1.sportmonks.com/api/v1.0/seasons?api_token=FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu`

const seasons = {};
const seasonData = {};

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  storeSeasonData(data);
}

function hideloader() {
  document.getElementById('loading').style.display = 'none'
}

function storeSeasonData(data) {
  for (let i = 0; i < data.data.length; i++) {
    seasons[data.data[i].id] = data.data[i].name;
  }
  getDriverIds();
}

async function getDriverIds() {
  for (let seasonId in seasons) {
    const url = `https://f1.sportmonks.com/api/v1.0/drivers/season/${seasonId}?api_token=${apiKey}`;
    const response = await fetch(url);
    const driverData = await response.json();
    const seasonDriverIds = {};

    for (let i = 0; i < driverData.data.length; i++) {
      const driverId = driverData.data[i].driver_id;
      const teamId = driverData.data[i].team_id;
      seasonDriverIds[driverId] = teamId;
    }

    seasonData[seasonId] = seasonDriverIds;
  }

  console.log(seasonData);
}

getapi(sportsUrl);


// const baseUrl = 'https://f1.sportmonks.com/api/v1.0';
// const apiToken = 'FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu';

// const relevantSeasons = [
//   {id: 6, name: '2021'},
//   {id: 7, name: '2022'},
//   {id: 8, name: '2023'}
// ]

// const seasonId2021 = relevantSeasons[0].id
// const seasonId2022 = relevantSeasons[1].id
// const seasonId2023 = relevantSeasons[2].id

// function getDriverIdsForSeason(seasonId) {
//   https://f1.sportmonks.com/api/v1.0/drivers/season/{ID}
//   //utilize relevantSeasons id's to pull driver_id information as well as team_id & points below is a sample data extraction format from the api) store the driver_id points & team_id in an obj that I can iterate through at a later time.
//   "data": [
//     {
//         "id": 91021,
//         "driver_id": 232394,
//         "team_id": 13,
//         "season_id": 6,
//         "points": 192,
//         "position": 1
//     },
// }



// function getDriverById(driverId) {
//   //loop through the data we just saved to pull the driver_id to get access to the  "data" object from the api below. I want the information stored in a variable that that holds the name number and image_path.
//         "id": 232402,
//         "team_id": 15,
//         "name": "Max Verstappen (NED)",
//         "short_name": "VER",
//         "number": 33,
//         "image_path": "https://cdn.sportmonks.com/images/f1/drivers/maxverstappen.png"
      
//     },
// }


// function getSeasonRaceResults(ID,seasonId) {
//   https://f1.sportmonks.com/api/v1.0/drivers/{ID}/season/{seasonID}/results

//   //use our driverId and seasonId information we've stored to pull the season race results and store that as a variable for us to access later on. thank you!

//     const driverInfo =  getDriverInfo(driverId);
//     driver.teamId = driverInfo.team_id;
//     driver.name = driverInfo.name;
//     driver.shortName = driverInfo.short_name;
//     driver.number = driverInfo.number;
//     driver.imagePath = driverInfo.image_path;

//     const raceResults =  getDriverRaceResultsForSeason(driverId, seasonId);
//     driver.raceResults = raceResults;

  