let timer, fullHour;

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if ((hour < 10) && (minutes < 10) && (seconds < 10)) {
        hour = "0" + hour;
        minutes = "0" + minutes;
        seconds = "0" + seconds;
    }

    fullHour = hour + ":" + minutes + ":" + seconds;

    document.getElementById("showOutput").value = fullHour;
}
timer = setInterval(clock, 1000);