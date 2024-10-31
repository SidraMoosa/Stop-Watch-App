var hourHeading = document.getElementById("hour")
var minutesHeading = document.getElementById("min")
var secondsHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;
var isRunning = false;


function timer(){
msec++;
msecHeading.innerHTML=msec;

if(msec >=100){
    sec++;
    secondsHeading.innerHTML=sec;
    msec =0;

    if(sec >=60){
        min++;
        minutesHeading.innerHTML= min;
        sec = 0;

        if(min >= 60){
            hour++;
            hourHeading.innerHTML= hour;
            min =0 ;
        }
    }
}
}


function start(){
    if (!isRunning) { 
        interval = setInterval(timer, 10);
        isRunning = true; 
    }
}

function stop(){
    clearInterval(interval);
    isRunning = false; 
}

function reset(){
clearInterval(interval);
isRunning = false; 
 hour = 0
 min = 0;
 sec = 0;
 msec = 0;
 hourHeading.innerHTML= hour;
 minutesHeading.innerHTML= min;   
 secondsHeading.innerHTML=sec;
 msecHeading.innerHTML=msec;

}

