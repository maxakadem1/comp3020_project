const playtimeDefaultLabel = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']
const title = 'Playtime History of All Games'
const xLabel = 'Week'
const yLabel = 'Time (hr)'

const dataset1 = 'Game 1'
const dataset2 = 'Game 2'
const dataset3 = 'Game 3'
const dataset4 = "Game 4"
// <block:setup:1>
const data = {
    labels: playtimeDefaultLabel,
    datasets: [{
        label: dataset1,
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: JSON.parse(localStorage.getItem('playtimeData'))
    },{
        label: dataset2,
        backgroundColor: 'rgb(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        data: JSON.parse(localStorage.getItem('playtimeData2'))
    },{
        label: dataset3,
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgba(255, 159, 64)',
        data: JSON.parse(localStorage.getItem('playtimeData3'))
    },{
        label: dataset4,
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgba(153, 102, 255)',
        data: JSON.parse(localStorage.getItem('playtimeData4'))
    },
    ]
};
// </block:setup>

// <block:config:0>
const configPlaytime = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: title
            },
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: yLabel
                }
            },
            x: {
                grid: {
                    display: false
                },
                stacked: true,
                title: {
                    display: true,
                    text: xLabel
                }
            }
        }
    }
};
// </block:config>
