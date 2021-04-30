let hours = 0;
let mins = 0;
let secs = 0;

let appendHours = document.getElementById('hours');
let appendMinutes = document.getElementById('mins');
let appendSeconds = document.getElementById('secs');

let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let stopButton = document.getElementById('stop');

let interval;

function formatter(num){
    return (num < 10) ? ('0' + num) : num;
} 

function timer() {
    secs++;
    
    if (secs <= 59) {
        appendSeconds.innerHTML = formatter(secs);
    } else {
        secs = 0;
        appendSeconds.innerHTML = formatter(secs);
        mins++;
        appendMinutes.innerHTML = formatter(mins);
    }

    if (mins === 60) {
        mins = 0;
        appendMinutes.innerHTML = formatter(mins);
        hours++;
        appendHours.innerHTML = formatter(hours);
    }
}

startButton.onclick = function () {
    interval = setInterval(timer, 1000);
}

pauseButton.onclick = function () {
    clearInterval(interval);
}

stopButton.onclick = function () {
    clearInterval(interval);
    hours = 0;
    mins = 0;
    secs = 0;
    appendSeconds.innerHTML = formatter(secs);
    appendMinutes.innerHTML = formatter(mins);
    appendHours.innerHTML = formatter(hours);
}