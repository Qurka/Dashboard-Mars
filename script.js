// Circle progress bars

$(function() {
    $('.chart-fl').easyPieChart({
        //your options goes here
        barColor: 'rgb(0, 90, 115)',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-o').easyPieChart({
        //your options goes here
        barColor: 'rgb(175, 238, 238)',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-f').easyPieChart({
        //your options goes here
        barColor: 'rgb(142, 219, 0)',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-w').easyPieChart({
        //your options goes here
        barColor: 'rgb(156, 211, 219)',
        scaleLength: 0,
        lineWidth: 10,
    });
});

// Distance traveled line chart
var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1 Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month',],
        datasets: [{
            label: 'Distance Travelled X 1.000.000 KM',
            backgroundColor: 'rgb(156, 97, 232)',
            borderColor: 'rgb(255, 99, 132)',
            data: [35, 84, 126, 160,]
        }]
    },

     // Configuration options go here
     options: {}
});

// Gauge Speed Meter
var gauge3 = Gauge(
    document.getElementById("gauge3"), {
      max: 60000,
      value: 38000
    }
  );

// Countdown Timer

function countdown (){
    var now = new Date();
    var eventDate = new Date(2020, 9, 23);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}

countdown();

// Population

var myBarChart = document.getElementById('myBarChart');
var chart = new Chart(myBarChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Earth', 'Mars', 'Moon'],
        datasets: [{
            label: 'Population X Million',
            backgroundColor: ['rgb(115, 191, 0)','rgb(191, 108, 0)','grey'],
            data: [7530, 10000, 3500,]
        }]
    },

     // Configuration options go here
     options: {}
});