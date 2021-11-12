const month = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June'
]

const monthData = [1, 93, 131, 58, 114, 81, 85, 114, 39, 118, 78, 99, 45, 36, 96, 52, 31, 143, 51, 48, 109, 30, 43, 52, 57, 130, 131, 121, 71, 65]

// <block:setup:1>
const data = {
    labels: month,
    datasets: [{
        label: 'Play Time',
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: monthData
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Time (hr)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            }
        }
    }
};
// </block:config>

module.exports = {
    actions: [],
    config: config,
};
