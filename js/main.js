const axios = require('axios');
const urlApi = 'http://localhost:3000/';
const choiceButtons = document.querySelectorAll(".btn-choice");
const notificationCreateEl = document.querySelector(".notification-create");
const notificationUpdateEl = document.querySelector(".notification-update");
let data = [];
let chart;

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener("click", () => {
        const noteObj = {
            sleepQuality: +choiceButton.id.slice(1),
            date: new Date().toISOString().split('T')[0],
            day: new Date().toLocaleString('fr-FR', {weekday: 'short'}),
            id: new Date().getTime()
        }
        // '2022-05-05'
        const todayNode = getTodayNote(noteObj.date);
        // Check if today's quality sleep as already been set
        if (todayNode) {
            updateNoteInDtb({...noteObj, id: todayNode.id});
        } else {
            addNoteToDtb(noteObj, true);
        }
    })
});

// Fetch sleepWatch from db
axios.get(urlApi + 'sleepWatch')
    .then(res => {
        data = res.data;
        const dates = res.data.map(el => new Date(el.date));
        const highestDate = Math.max.apply(null, dates);
        // Check if there is days without matching value in dtb
        const missingDays = getMissingDaysFromDtb(new Date(highestDate));
        if (missingDays.length > 0) {
            handleMissingDays(missingDays.sort());
            return;
        }
        initChart(res.data);
    })
    .catch(error => console.log(error));

function addNoteToDtb(noteDto, chartIsRendered, isLastMissingDayToAddInDtb) {
    axios.post(urlApi + 'sleepWatch', noteDto)
        .then(resp => {
            if (chartIsRendered) {
                removeDataFromChart(chart);
                addDataToChart(chart, noteDto);
                showNotification(false);
            } else {
                data.push(noteDto);
                if (isLastMissingDayToAddInDtb) {
                    initChart(data);
                }
            }
        })
        .catch(error => console.log(error));
}

function updateNoteInDtb(noteDto) {
    axios.put(urlApi + 'sleepWatch/' + noteDto.id, noteDto)
        .then(resp => {
            updateDataFromChart(chart, noteDto);
            // Add UI animation notification
            showNotification(true);
        })
        .catch(error => console.log(error));
}

function showNotification(isUpdate) {
    const element = isUpdate ? notificationUpdateEl : notificationCreateEl;
    element.classList.add("d-block");
    setTimeout(() => element.classList.remove("d-block"), 1500);
}

function initChart(data) {
    // Init chart.js component
    const chartData = {
        datasets: [{
            label: 'Qualité du sommeil',
            backgroundColor: 'rgb(255,99,132)',
            borderColor: '#f5f5f5',
            data: data.slice(-7),
            parsing: {
                yAxisKey: 'sleepQuality',
                xAxisKey: 'day'
            },
        }]
    };

    // Create chartJS config
    const config = {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
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

function handleMissingDays(missingDays) {
    // ['2022-05-05', '2022-05-05']
    missingDays.forEach((missingDay, i) => {
        const noteObj = {
            sleepQuality: null,
            date: missingDay,
            day: new Date(missingDay).toLocaleString('fr-FR', {weekday: 'short'}),
            id: new Date().getTime() + i
        }
        addNoteToDtb(noteObj, false, missingDays.length === i + 1);
    })
}

function getMissingDaysFromDtb(maxDate) {
    let missingDays = [];
    const diffInTime = new Date().getTime() - maxDate.getTime();
    const diffInDays = (diffInTime / (1000 * 3600 * 24)) - 1;
    for (let i = 1; i < diffInDays; i++) {
        const date = new Date();
        missingDays.push(new Date(date.setDate(date.getDate() - i)).toISOString().split('T')[0]);
    }
    return missingDays;
}

function addDataToChart(chart, noteObj) {
    chart.data.labels.push(noteObj.day);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(noteObj);
    });
    chart.update();
}

function updateDataFromChart(chart, noteObj) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data[dataset.data.length - 1] = noteObj;
    });
    chart.update();
}

function removeDataFromChart(chart) {
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    chart.update();
}

function getTodayNote(today) {
    return chart.data.datasets[0].data.find(note => note.date === today ? note : null);
}
