// Circle progress bar
$(function() {
    $('.chart-fl').easyPieChart({
        //your options goes here
        barColor: 'brown',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-o').easyPieChart({
        //your options goes here
        barColor: 'blue',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-f').easyPieChart({
        //your options goes here
        barColor: 'green',
        scaleLength: 0,
        lineWidth: 10,
    });
});

$(function() {
    $('.chart-w').easyPieChart({
        //your options goes here
        barColor: 'lightblue',
        scaleLength: 0,
        lineWidth: 10,
    });
});

var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Distance Travlled',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

     // Configuration options go here
     options: {}
});