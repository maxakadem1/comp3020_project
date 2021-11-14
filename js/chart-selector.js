// Dynamically updates the dataset for the chart object rendered


// Spending Data
const spendingYearData = [200, 300, 100];

// Playtime Data
const weekLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52',
    '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104',
    '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']
const weekData = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]
const monthLabels = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June'
]
const monthData = [10, 93, 131, 58, 114, 81, 85, 114, 39, 118, 78, 99, 45, 36, 96, 52, 31, 143, 51, 48, 109, 30, 43, 52, 57, 130, 131, 121, 71, 65]
const yearLabels = ['2019', '2020', '2021'];
const yearData = [1020, 736, 375];

function swapData(chart, labels, dataSet, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132, 0.7)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataSet
        }]
    };
    console.log("I was pressed!");

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

if (document.getElementById("playtime-page")) {
    document.getElementById("week-btn").addEventListener("click", () => swapData(myChart, weekLabels, weekData, 'Week'));
    document.getElementById("month-btn").addEventListener("click", () => swapData(myChart, monthLabels, monthData, 'Month'));
    document.getElementById("year-btn").addEventListener("click", () => swapData(myChart, yearLabels, yearData, 'Year'));
}
if (document.getElementById("spending-page")) {
    document.getElementById("spend-week-btn").addEventListener("click", () => swapData(myChart, weekLabels, weekData, 'Week'));
    document.getElementById("spend-month-btn").addEventListener("click", () => swapData(myChart, monthLabels, monthData, 'Month'));
    document.getElementById("spend-year-btn").addEventListener("click", () => swapData(myChart, yearLabels, spendingYearData, 'Year'));
}


// function showPlaytime() {
//     let chart = document.getElementById('playtime-month');
//     chart.style.display = "block";
//     // chart.style.display = chart.style.display === "none" ? "block" : "none";
// }