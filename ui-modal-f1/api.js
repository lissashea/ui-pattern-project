const baseUrl = `https://f1.sportmonks.com/api/v1.0`;
const driverUrl = `https://f1.sportmonks.com/api/v1.0/drivers/${driverId}?api_token=${FhmVbZTQgiy5K23FYfxEpG3nQa2RekWfbVwHzwVKCuTPc0bPN1KdoYcH4hwu}`;

function getDriverInfo(driverId) {
  return fetch(driversUrl.replace('{ID}', driverId))
    .then(response => response.json())
    .then(response => {
      const driverData = response.data[0];
      return {
        id: driverData.id,
        teamId: driverData.team_id,
        name: driverData.name,
        shortName: driverData.short_name,
        number: driverData.number,
        imagePath: driverData.image_path
      };
    })
    .catch(err => console.error(err));
}

function updateWebsiteWithDriverInfo(driverInfo) {
  // Update your website with the driver information here
}

function getDriverInfoForSeason(seasonId) {
  fetch(driversUrl.replace('{ID}', seasonId))
    .then(response => response.json())
    .then(response => {
      const drivers = response.data;
      const driverIds = drivers.map(driver => driver.id);
      const driverPromises = driverIds.map(driverId => getDriverInfo(driverId));
      Promise.all(driverPromises)
        .then(driverDataArray => {
          const driverInfo = {};
          driverDataArray.forEach(driverData => {
            driverInfo[driverData.id] = driverData;
          });
          updateWebsiteWithDriverInfo(driverInfo);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}