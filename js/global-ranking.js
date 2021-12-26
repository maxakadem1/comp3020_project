const playtimeDefaultLabel = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']

const title = 'Total Playtime History'
const xLabel = 'Week'
const yLabel = 'Time (hr)'

// <block:setup:1>
const data = {
    labels: playtimeDefaultLabel,
    datasets: [{
        label: 'User',
        backgroundColor: 'rgba(208, 91, 186, 0.7)',
        borderColor: 'rgba(208, 91, 186, 0.7)',
        data: JSON.parse(localStorage.getItem('playtimeTotalData'))
    }, {
        label: 'Global User Average',
        backgroundColor: 'rgba(53, 205, 150, 0.7)',
        borderColor: 'rgba(53, 205, 150, 0.7)',
        data: JSON.parse(localStorage.getItem('playtimeGlobalData'))
    }]
};

const spendingTitle = 'Spending History'
const xSpendingLabel = 'Week'
const ySpendingLabel = 'Dollars Spent (CAD)'

const data2 = {
    labels: playtimeDefaultLabel,
    datasets: [{
        label: 'User',
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: JSON.parse(localStorage.getItem('spendingData'))
    }, {
        label: 'Global User Average',
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        data: JSON.parse(localStorage.getItem('spendingGlobalData'))
    }]
};

const configTotalPlaytime = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                font: {
                    size: 18
                },
                text: title,
            },
            legend: {
                display: true,
                borderColor: 'rgb(255, 99, 132, 0.7)'
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: yLabel
                }
            },
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: xLabel
                }
            }
        }
    }
};

const configGlobalSpending = {
    type: 'bar',
    data: data2,
    options: {
        plugins: {
            title: {
                display: true,
                font: {
                    size: 18
                },
                text: spendingTitle
            },
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: ySpendingLabel
                }
            },
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: xSpendingLabel
                }
            }
        }
    }
};