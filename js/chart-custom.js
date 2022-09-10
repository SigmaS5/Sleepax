const axios = require('axios');
const urlApi = 'http://localhost:3000/';
let data;
let chart;

// Fetch sleepWatch from db
axios.get(urlApi + 'sleepWatch')
    .then(res => {
        data = res.data;
        initChart(data);
    })
    .catch(error => console.log(error));

// Sleep Quality Choice
const choiceButtons = document.querySelectorAll(".btn-choice");

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener("click", () => {
        const obj = {
            sleepQuality: +choiceButton.id.slice(1),
            date: new Date().toISOString(),
            day: new Date().toLocaleString('fr-FR', {weekday: 'long'}),
            id: new Date().getTime()
        }
        const existingNote = getSameDayNote(obj);


        if (existingNote) {
            const newVote = {...obj, id: existingNote.id};
            axios.put(urlApi + 'sleepWatch/' + existingNote.id, {...obj, id: existingNote.id})
                .then(resp => {
                    const index = data.findIndex(el => el.id === existingNote.id);
                    this.data[index] = newVote;
                    initChart(data);
                })
                .catch(error => console.log(error));
        } else {
            axios.post(urlApi + 'sleepWatch', obj)
                .then(resp => {
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(obj);
                    });
                    console.log(chart.data.datasets);
                    chart.update();
                })
                .catch(error => console.log(error));
        }
    })
});

function initChart(data) {
    // Init chart.js component
    const chartData = {
        borderColor: '#f5f5f5',
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255,99,132)',
            borderColor: '#f5f5f5',
            data,
            parsing: {
                yAxisKey: 'sleepQuality',
                xAxisKey: 'day'
            },
        }]
    };

    const config = {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: 'white'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    chart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

function getSameDayNote(obj) {
    let note = null;
    data.forEach(el => {
        const dateEl = el.date.split('T')[0];
        const today = obj.date.split('T')[0];
        if (dateEl === today) {
            note = el
        }
    });
    return note;
}