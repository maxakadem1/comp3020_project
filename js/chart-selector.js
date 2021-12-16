// Dynamically updates the dataset for the chart object rendered
const weekLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51',
    '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103',
    '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']
const monthLabels = [
    'Jan \'19', 'Feb\'19', 'Mar \'19', 'Apr \'19', 'May \'19', 'Jun \'19', 'Jul\'19', 'Aug \'19', 'Sep \'19', 'Oct \'19', 'Nov \'19', 'Dec \'19',
    'Jan \'20', 'Feb \'20', 'Mar \'20', 'Apr \'20', 'May \'20', 'Jun \'20', 'Jul \'20', 'Aug \'20', 'Sep \'20', 'Oct \'20', 'Nov \'20', 'Dec \'20',
    'Jan \'21', 'Feb \'21', 'Mar \'21', 'Apr \'21', 'May \'21', 'Jun \'21']
const yearLabels = ['2019', '2020', '2021'];

// Playtime Data
const ptWeekData = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]
const ptMonthData = [10, 32, 22, 12, 30, 29, 20, 35, 16, 16, 15, 16, 14, 37, 32, 13, 20, 12, 12, 31, 17, 26, 27, 25, 16, 23, 13, 25, 8, 32, 23, 30, 6]
const ptYearData = [253, 266, 176];
const ptGlobalWeek = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Spending Data
const spendingWeekData = [84, 0, 0, 0, 87, 0, 0, 0, 27, 0, 0, 0, 40, 0, 0, 0, 65, 0, 0, 0, 56, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 47, 0, 0, 0, 99, 0, 0, 0, 99, 0, 0, 0, 12, 0, 0, 0, 19, 0, 0, 0, 7, 0, 0, 0, 37, 0, 0, 0, 77, 0, 0, 0, 27, 0, 0, 0, 39, 0, 0, 0, 67, 0, 0, 0, 7, 0, 0, 0, 54, 0, 0, 0, 38, 0, 0, 0, 60, 0, 0, 0, 78, 0, 0, 0, 68, 0, 0, 0, 91, 0, 0, 0, 93, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 77, 0]
const spendingMonthData = [84, 87, 27, 40, 65, 56, 99, 0, 94, 47, 99, 99, 12, 19, 7, 37, 77, 27, 39, 67, 7, 54, 38, 60, 78, 68, 91, 93, 18, 60, 0, 76, 77]
const spendingYearData = [797, 444, 561]

// Global Ranking Data

function swapData(chart, labels, dataSet, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132, 0.7)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataSet
        }]
    };

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

function swapGloablData(chart, labels, userDataSet, globalDataSet, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            label: 'User',
            backgroundColor: 'rgb(255, 99, 132, 0.7)',
            borderColor: 'rgb(255, 99, 132)',
            data: userDataSet
        }, {
            label: 'Global Users',
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgb(54, 162, 235)',
            data: globalDataSet
        }]
    };

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

if (document.getElementById("playtime-page")) {
    if (document.getElementById("global-page")) {
        document.getElementById("week-btn").addEventListener("click", () => swapGloablData(playTimeChart, weekLabels, ptWeekData, ptGlobalWeek, 'Week'));
        document.getElementById("month-btn").addEventListener("click", () => swapGloablData(playTimeChart, monthLabels, ptMonthData, 'Month'));
        document.getElementById("year-btn").addEventListener("click", () => swapGloablData(playTimeChart, yearLabels, ptYearData, 'Year'));
    } else {
        document.getElementById("week-btn").addEventListener("click", () => swapData(playTimeChart, weekLabels, ptWeekData, 'Week'));
        document.getElementById("month-btn").addEventListener("click", () => swapData(playTimeChart, monthLabels, ptMonthData, 'Month'));
        document.getElementById("year-btn").addEventListener("click", () => swapData(playTimeChart, yearLabels, ptYearData, 'Year'));
    }
}

if (document.getElementById("spending-page")) {
    console.log('debug print - spending page buttons')
    if (document.getElementById("global-page")) {
        document.getElementById("week-btn").addEventListener("click", () => swapGloablData(playTimeChart, weekLabels, ptWeekData, ptGlobalWeek, 'Week'));
        document.getElementById("month-btn").addEventListener("click", () => swapGloablData(playTimeChart, monthLabels, ptMonthData, 'Month'));
        document.getElementById("year-btn").addEventListener("click", () => swapGloablData(playTimeChart, yearLabels, ptYearData, 'Year'));
    } else {
        document.getElementById("week-btn").addEventListener("click", () => swapData(spendingChart, weekLabels, spendingWeekData, 'Week'));
        document.getElementById("month-btn").addEventListener("click", () => swapData(spendingChart, monthLabels, spendingMonthData, 'Month'));
        document.getElementById("year-btn").addEventListener("click", () => swapData(spendingChart, yearLabels, spendingYearData, 'Year'));

    }

}


// function showPlaytime() {
//     let chart = document.getElementById('playtime-month');
//     chart.style.display = "block";
//     // chart.style.display = chart.style.display === "none" ? "block" : "none";
// }