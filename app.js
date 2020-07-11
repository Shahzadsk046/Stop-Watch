// function timer(){
//     console.log("running...")
// }

// setInterval run repeatively
// setInterval(timer, 1000)

// function timeOut(){
//     console.log("running...")
// }

// // setTimeOut run after given time in parameter and run only once
// setTimeout(timeOut, 5000)

// var count = 0
// var interval
// function timer(){
//     count++
//     console.log(count)
// }

// interval = setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        sec = 00;
        min++;
        minHeading.innerHTML = min;
    }
    else if(min >= 60){
        min = 00;
        hour++;
        hourHeading.innerHTML = hour;
    }
}

function start(){
    interval = setInterval(timer, 10)
    document.getElementById("btn1").disabled = true;
}

function stop(){
    clearInterval(interval)
    document.getElementById("btn1").disabled = false;
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    document.getElementById("btn1").disabled = false;
}

