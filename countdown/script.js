const daysEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 jan 2024'

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearDate-currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds)%60;
    console.log(days, hour, minutes, seconds)

    daysEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hour);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)
