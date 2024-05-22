"use strict"

//second
let topSecBox = document.getElementsByClassName("seconds-p")[0];
let botSecBox = document.getElementsByClassName("seconds-p")[1];

//minute
let topMinBox = document.getElementsByClassName("minutes-p")[0];
let botMinBox = document.getElementsByClassName("minutes-p")[1];

//hours
let topHoursBox = document.getElementsByClassName("hours-p")[0];
let botHoursBox = document.getElementsByClassName("hours-p")[1];

//days
let topDaysBox = document.getElementsByClassName("days-p")[0];
let botDaysBox = document.getElementsByClassName("days-p")[1];



//get new year date and current date/time
let newYear = new Date("2025-01-01");
newYear.setHours(0, 0, 0, 0)
let currentTime;

//times calculate
let day;
let hours;
let minutes;
let seconds;



let myInteval = setInterval(() => {
    currentTime = new Date();
    let distance = newYear-currentTime;
    day = (distance/1000/60/60)/24;
    hours = (distance/1000/60/60)%24;
    minutes = (((distance/1000/60/60)%24)-(Math.floor(hours)))/1.666666666*100;
    seconds = ((minutes - Math.floor(minutes))/1.666666666*100).toFixed();
    
    //ამრგვალებს ყველაზე დაბალ ციფრამდე და ფიქსავს მთელ რიცხვამდე
    seconds = (Math.floor(seconds)).toFixed();
    minutes = (Math.floor(minutes)).toFixed();
    hours = (Math.floor(hours)).toFixed();
    day = (Math.floor(day)).toFixed();

    // 1-დან 9-მდე ციფრს წინ უმატებს 0-ს.
    if(seconds.length<2) {
        seconds = "0" + seconds;
    }
    if(minutes.length<2) {
        minutes = "0" + minutes;
    }
    if(hours.length<2) {
        hours = "0" + hours;
    }
    if(day.length<2) {
        day = "0" + day;
    }

    //გადააქვს html-ის ზედა დივში დრო.
    topSecBox.innerHTML = seconds;
    topMinBox.innerHTML = minutes;
    topHoursBox.innerHTML = hours;
    topDaysBox.innerHTML = day;

    if(seconds===0 && minutes===0 && hours===0 && day===0) {
        clearInterval(myInteval);
    }
}, 1000);



//თაიმაუთი საჭიროა ჩამოსაფურცლი ანიმაციისთვის დასაყოვნებლად.
setTimeout(() => {
    let newInterval = setInterval(() => {
        //გადააქვს html-ის ქვედა დივში დრო.
        botSecBox.innerHTML = seconds;
        botMinBox.innerHTML = minutes;
        botHoursBox.innerHTML = hours;
        botDaysBox.innerHTML = day;

        if(seconds===0 && minutes===0 && hours===0 && day===0) {
            clearInterval(newInterval);
        }
    }, 1000);
}, 100);