let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: '# of Points',
      data: [761, 1353, 949, 1097, 1172, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Points by Year'
    }
  }
});

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//   const data = google.visualization.arrayToDataTable([
//     ['Effort', 'Amount given'],
//     ['My all', 100],
//   ]);

//   const options = {
//     pieHole: 0.5,
//     pieSliceTextStyle: {
//       color: 'black',
//     },
//     legend: 'none'
//   };

//   const chart = new google.visualization.PieChart(document.getElementById('donut_single'));
//   chart.draw(data, options);
// }

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

