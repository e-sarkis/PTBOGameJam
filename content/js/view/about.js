Chart.defaults.global.hover.mode = 'nearest';
Chart.defaults.global.defaultFontFamily = 'Raleway';

// Attendance Details
var chartAttendance = new Chart($("canvas#attendance-chart"), { 
    type: 'line', 
    data: {
        labels: ["", "01", "02"],
        datasets: [
        {
            label: "Attendees",
            fill: false,
            lineTension: 0.1,         
            backgroundColor: "rgba(0,204,255,0.8)",
            borderColor: "rgba(0,204,255,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,204,255,1)",
            pointBackgroundColor: "rgba(0,204,255,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,43, 155],
            spanGaps: false,
        },
        {
            label: "Jammers",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,102,0,0.8)",
            borderColor: "rgba(255,102,0,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,102,0,1)",
            pointBackgroundColor: "rgba(255,102,0,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,17, 80],
            spanGaps: false,
        },
        {
            label: "No Shows",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,204,0,0.8)",
            borderColor: "rgba(255,204,0,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,204,0,1)",
            pointBackgroundColor: "rgba(255,204,0,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,5, 41],
            spanGaps: false,
        },
        {
            label: "Registered",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(102,102,102,0.8)",
            borderColor: "rgba(102,102,102,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(102,102,102,1)",
            pointBackgroundColor: "rgba(102,102,102,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,27, 162],
            spanGaps: false,
        }]
    }, 
    options: { 
        title: {
            display: true,
            text: 'ATTENDANCE',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'Raleway',
                    fontStyle: 'bold',
                    fontSize: 26
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true
    } 
});

// Games Made Chart
var chartGames = new Chart($("canvas#games-chart"), { 
    type: 'line', 
    data: {
        labels: ["", "01", "02"],
        datasets: [
        {
            label: "Total",
            fill: false,
            lineTension: 0.1,         
            backgroundColor: "rgba(0,204,255,0.8)",
            borderColor: "rgba(0,204,255,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,204,255,1)",
            pointBackgroundColor: "rgba(0,204,255,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,11, 33],
            spanGaps: false,
        },
        {
            label: "Solo",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,102,0,0.8)",
            borderColor: "rgba(255,102,0,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,102,0,1)",
            pointBackgroundColor: "rgba(255,102,0,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,8, 15],
            spanGaps: false,
        },
        {
            label: "Team",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,204,0,0.8)",
            borderColor: "rgba(255,204,0,0.4)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,204,0,1)",
            pointBackgroundColor: "rgba(255,204,0,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0,3, 18],
            spanGaps: false,
        }]
    }, 
    options: { 
        title: {
            display: true,
            text: 'GAMES MADE',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'Raleway',
                    fontStyle: 'bold',
                    fontSize: 26
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});

// Engine Usage Chart
var chartEngines = new Chart($("canvas#engine-chart"), { 
    type: 'pie', 
    data: {
        labels: ["Unity", "Unreal", "Game Maker", "Scratch"],
        datasets: [{
            data: [37, 2, 2, 1],
            backgroundColor: [
                "#00bcd4",
                "#dda209",
                "#71b417",
                "#586cdc"
            ],
            hoverBackgroundColor: [
                "#00bcd4",
                "#dda209",
                "#71b417",
                "#586cdc"
            ]
        }]
    },
    options: { 
        title: {
            display: true,
            text: 'ENGINE USAGE',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});

// Economic Impact Chart
// - public funding 