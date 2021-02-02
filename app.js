var hrs = document.getElementById("inputHrs")
var mins = document.getElementById("inputMins")
var sec = 59
var milisec = 100

var gethrs = document.getElementById("hrs")
var getmins = document.getElementById("mins")
var getsec = document.getElementById("sec")
var getmsec = document.getElementById("milisec")

var interval;

function GetValues(){
    gethrs.innerHTML = document.getElementById("inputHrs").value
    getmins.innerHTML = document.getElementById("inputMins").value
}

function timer(){
    
    milisec--
    getmsec.innerHTML = milisec
    if ( milisec <= 0){
        sec--
        getsec.innerHTML = sec
        milisec = 100
    }
    else if ( sec <= 00){
        mins--
        getmins.innerHTML = mins
        milisec = 100
        sec = 60
    }
    else if ( mins <=00){
        hrs--
        gethrs.innerHTML = hrs
        milisec = 100
        sec = 60
        mins = 00
    }
    else if (hrs <= 00){
        hrs = End
        mins = End
        sec= End
        milisec = End
  
    }
}



function  start (){

interval = setInterval(timer , 10)
var btn = document.getElementById("start")
btn.disabled = true
}

function pasue(){
    clearInterval(interval)
    var btn = document.getElementById("start")
btn.disabled = 0
}

function reset(){
    milisec = 00
    sec = 00
    mins = 00
    hrs = 00
    getmsec.innerHTML = milisec
    getsec.innerHTML = sec
    getmins.innerHTML = mins
    gethrs.innerHTML= hrs
    clearInterval(interval)
    var btn = document.getElementById("start")
btn.disabled = 0
}

