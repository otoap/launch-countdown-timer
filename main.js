"use strict"

let minTop = document.getElementsByClassName("top-span")[0].textContent;
let minBottom = document.getElementsByClassName("bottom-span")[0].textContent;
console.log(minBottom)


let newYear = new Date("2025-01-01");
let currentTime = new Date;
console.log((newYear - currentTime)/1000/60/60/24)
let leftYear = (newYear - currentTime)/1000/60/60/24;

let leftHours = ((leftYear - leftYear.toFixed())*10).toFixed();
console.log(leftHours);
if(leftHours.length<2) {
    let newTime = "0"+leftHours;
    console.log(newTime)
}

let myInteval = setInterval(() => {
    console.log(minTop-=1)
    if(minTop == 55) {
        clearInterval(myInteval)
    }
}, 1000);

setTimeout(() => {
    let newInterval = setInterval(() => {
        console.log(minBottom-=1);
        if(minBottom == 55) {
            clearInterval(newInterval)
        }
    }, 1000);
}, 100);