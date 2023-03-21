
const baseUrl = 'https://f1.sportmonks.com/api/v1.0';
const apiToken = 'FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu';

const relevantSeasons = [
  {id: 6, name: '2021'},
  {id: 7, name: '2022'},
  {id: 8, name: '2023'}
]

const seasonId2021 = relevantSeasons[0].id
const seasonId2022 = relevantSeasons[1].id
const seasonId2023 = relevantSeasons[2].id

function getDriverIdsForSeason(seasonId) {
}



function getDriverRaceResultsForSeason(driverId, seasonId) {
}


function getDriversForSeason(seasonId) {
const driverIds = getDriverIdsForSeason(seasonId);
  const drivers = [];

  for (let driverId of driverIds) {
    const driver = {
      id: driverId,
      teamId: null,
      name: null,
      shortName: null,
      number: null,
      imagePath: null,
      points: 0,
      raceResults: [],
    };

    const driverInfo =  getDriverInfo(driverId);
    driver.teamId = driverInfo.team_id;
    driver.name = driverInfo.name;
    driver.shortName = driverInfo.short_name;
    driver.number = driverInfo.number;
    driver.imagePath = driverInfo.image_path;

    const raceResults =  getDriverRaceResultsForSeason(driverId, seasonId);
    driver.raceResults = raceResults;

    drivers.push(driver);
  }

  return drivers;
}

function getDriverInfo(driverId) {
  const url = `${baseUrl}/drivers/${driverId}?api_token=${apiToken}`;
  const response = fetch(url);
  const data = response.json();
  return data.data;
}

(async () => {
   const relevantSeasons = getSeasons();
   const driversBySeason = [];

   for (let season of relevantSeasons) {
     const drivers = getDriversForSeason(season.id);
     driversBySeason.push({
       seasonId: season.id,
       drivers: drivers,
     });
   }

  console.log(driversBySeason);
});


