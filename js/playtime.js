
// <block:setup:1>
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Play Time',
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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
                    text: 'Time (s)'
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