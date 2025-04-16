var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wed", "Thu", "Friday", "Sat"];//day array

var hrSpan = document.getElementById('hr');//getting horus and putting them in variable
var minSpan = document.getElementById('min');//getting minutes and putting them in variable
var secSpan = document.getElementById('sec');//getting seconds and putting them in variable
var daySpan = document.getElementById('day');//getting day and putting them in variable
var amSpan = document.getElementById('am');//getting span of am and putting them in variable
var pmSpan = document.getElementById('pm');//getting span of am and putting them in variable
var a = 'am'//putting am in a variable to call it later in function
var b = 'pm'//putting am in a variable to call it later in function

var day = currentDate.getDay();
var currentDay = days[day];

setInterval(function(){
    var x = dayNames[currentDate.getDay()];
    let now = new Date();//getting now latest date
    minSpan.innerText = now.getMinutes();//putting latest date in minspan using this command
    secSpan.innerText = now.getSeconds();////putting latest date in minspan using this command
    hrSpan.innerText = now.getHours();//putting latest date in minspan using this command
    document.getElementById("day").innerText = currentDay;
    if (now.getHours() >= 12) {
        pmSpan.innerText = a;
        amSpan.innerText = '';
    }
    else {
        amSpan.innerText = b;
        pmSpan.innerText = '';
    }
},1000)// this function sees if time which it get from hours is greater than 12 so it displays a in am span which is actually am else it shows pm in pm span
//1000 shows that after 1000 miliseconds function  repeat it self this is why we are getting a continuos time in digital clock these type of functions are called call back functions.
