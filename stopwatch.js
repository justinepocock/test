var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
var clockface = document.getElementById('clockface');
//var timeDefault = '0',

Interval;

startButton.addEventListener('click', function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 100);
});

stopButton.addEventListener('click', function() {
    clearInterval(Interval);
});

resetButton.addEventListener('click', function() {
    clearInterval(Interval);
    resetTimer();
});


function startTimer() {
    // clockface.textContent = timeDefault++;
    var d = new Date();
    d.setMinutes(0);
    var h = d.getHours(0);
    var m = d.getMinutes(0);
    var s = d.getSeconds(0);
    var ms = d.getMilliseconds(0);

    clockface.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function resetTimer() {
    clockface.textContent = "--:--:--:--";
}
