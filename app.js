//day array
var dayNames = ["Sunday", "Monday", "Tuesday", "Wed", "Thu", "Friday", "Sat"];

//getting horus and putting them in variable
var hrSpan = document.getElementById('hr');
//getting minutes and putting them in variable
var minSpan = document.getElementById('min');
//getting seconds and putting them in variable
var secSpan = document.getElementById('sec');
//getting day and putting them in variable
var daySpan = document.getElementById('day');
//getting span of am and putting them in variable
var amSpan = document.getElementById('am');
//getting span of am and putting them in variable
var pmSpan = document.getElementById('pm');

//putting am in a variable to call it later in function
var a = 'am'
//putting am in a variable to call it later in function
var b = 'pm'

setInterval(function(){
    let now = new Date();//getting now latest date
    minSpan.innerText = now.getMinutes();//putting latest date in minspan using this command
    secSpan.innerText = now.getSeconds();////putting latest date in minspan using this command
    hrSpan.innerText = now.getHours();//putting latest date in minspan using this command
    daySpan.innerText = dayNames[now.getDay()];
    if (now.getHours() >= 12) {
        pmSpan.innerText = a;
        amSpan.innerText = '';
    }
    else {
        amSpan.innerText = b;
        pmSpan.innerText = '';
    }
},1000)
// this function sees if time which it get from hours is greater than 12 so it displays a in am span which is actually am else it shows pm in pm span
//1000 shows that after 1000 miliseconds function  repeat it self this is why we are getting a continuos time in digital clock these type of functions are called call back functions.
