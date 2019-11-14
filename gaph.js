var barChartData = {
    labels: ['New Customers', "Existing Customers"],
    datasets: [{
        label: 'From Competitor',
        backgroundColor: [
            'rgb(200 250 130)',
            'rgb(200 250 130)'
        ],
        stack: 'Stack 0',
        data: [12, 19],
    }, {
        label: 'New Market',
        backgroundColor: [
            'rgb(150 240 0)',
            'rgb(150 240 0)'
        ],
        stack: 'Stack 0',
        data: [22, 29],
    }, {
        label: 'Baseline',
        backgroundColor: [
            'rgb(255 255 255)',
            'rgb(255 255 255)'
        ],
        stack: 'Stack 1',
        data: [32, 29],
    },{
        label: 'Baseline',
        backgroundColor: [
            'rgb(170 170 170)',
            'rgb(170 170 170)'
        ],
        stack: 'Stack 1',
        data: [42, 39],
    }
    ]
};

var ctxVolume = document.getElementById('graph-volume');
ctxVolume.height = 300;
var myChartVolume = new Chart(ctxVolume, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'Volume',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxARPU = document.getElementById('graph-ARPU');
ctxARPU.height = 300;
var myChartARPU = new Chart(ctxARPU, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'ARPU',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxRevenue = document.getElementById('graph-revenue');
ctxRevenue.height = 300;
var myChartRevenue = new Chart(ctxRevenue, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'Revenue',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxACVL = document.getElementById('graph-ACVL');
ctxACVL.height = 300;
var myChartACVL = new Chart(ctxACVL, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'ACVL',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxValue = document.getElementById('graph-value');
ctxValue.height = 300;
var myChartValue = new Chart(ctxValue, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'Value',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxACVLRatio = document.getElementById('graph-ACVL-ratio');
ctxACVLRatio.height = 300;
var myChartACVLRAtio = new Chart(ctxACVLRatio, {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'ACVL Ratio',
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            fontColor: "black",
            fontSize: 12,
            stepSize: 1,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    beginAtZero: true
                }
            }]
        }
    }
});
