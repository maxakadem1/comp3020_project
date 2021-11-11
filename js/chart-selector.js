// show and hides all of the different charts

function showPlaytime() {
    let chart = document.getElementById('playtime-month');
    chart.style.display = "block";
    // chart.style.display = chart.style.display === "none" ? "block" : "none";
}

function swapData(chart) {
    const year = ['2019', '2020', '2021'];
    const yearData = [1011, 736, 375];

    const newDataset = {
        labels: year,
        datasets: [{
            label: 'new data set',
            backgroundColor: 'rgb(255, 99, 132, 0.7)',
            borderColor: 'rgb(255, 99, 132)',
            data: yearData
        }]
    };

    chart.config.data = newDataset;
    chart.update();
}

// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }

// function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// }



