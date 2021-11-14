const defaultLabel = ['0', '1', '2', '3', '4']
const spendingDefaultData = [3, 5, 2, 0, 9]
const title = 'Spending History'
const xLabel = 'Week'
const yLabel = 'Dollars Spent (CAD)'

// <block:setup:1>
const data = {
    labels: defaultLabel,
    datasets: [{
        label: 'myUser',
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: spendingDefaultData
    }, {
        label: 'Global Users',
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        data: spendingDefaultData
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: title
            },
            legend: {
                display: false
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
// </block:config>

// module.exports = {
//     actions: [],
//     config: config,
// };
