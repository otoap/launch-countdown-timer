"use strict"

let minTop = document.getElementsByClassName("top-span")[0].textContent;
let minBottom = document.getElementsByClassName("bottom-span")[0].textContent;
console.log(minBottom)

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