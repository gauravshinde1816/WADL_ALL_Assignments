const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const linedata = {
    labels: labels,
    datasets: [{
      label: 'Total Hours Watched',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },{
      label: 'Total Hours Watched',
      backgroundColor: 'rgb(35, 90, 130)',
      borderColor: 'rgb(25, 99, 120)',
      data: [10, 0, 15, 12, 120, 230, 20],
    }
  ]
  };
  


  const config = {
    type: 'line',
    data: linedata,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



  const labels1 = [
    'Web Devlopment',
    'Android',
    'Data Science',
    'ML',
    'DSA',
    'NodeJS',
  ];

  const data1 = {
    labels: labels1,
    datasets: [{
      label: 'Content Watched',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };



  const config1 = {
    type: 'bar',
    data: data1,
    options: {}
  };



  
  const barchart = new Chart(
    document.getElementById('barchart'),
    config1
  );


  const data2 = {
    labels: labels1,
    datasets: [{
      label: 'Content Watched',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgb(20, 23, 120)',
        
      ],
      borderWidth: 1
    }]
  };



  const config2 = {
    type: 'pie',
    data: data2,
    options: {}
  };



  const piechart = new Chart(
    document.getElementById("piechart"),
    config2
  )


  const config3 = {
    type: 'doughnut',
    data: data2,
    options: {}
  };

  const doughnutchart = new Chart(
    document.getElementById("doughnutchart") ,
    config3
  )
