let timer;

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let fullHour = hour + ":" + minutes + ":" + seconds;

    document.getElementById("showOutput").value = fullHour;
}

timer = setInterval(clock, 1000);

