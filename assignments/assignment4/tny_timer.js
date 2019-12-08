"use strict"


/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Javier Cruz
   Date: 10/31/19

*/
showClock();


setInterval("showClock()", 1000);

function showClock() {
      // var thisDay = new Date(2018,4,19,9,31,27,0);
      var thisDay = new Date();
      // console.log(thisDay)
      var localDate = thisDay.toLocaleDateString();
      // console.log(localDate)
      var localTime= thisDay.toLocaleTimeString();
      // console.log(localTime)



var j4Date = nextJuly4(thisDay);
// console.log(j4Date)
j4Date.setHours(21);
// console.log(j4Date)

/*this line 25 */
var daysLeft = (j4Date - thisDay)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;


document.getElementById("dLeft").textContent= Math.floor(daysLeft);
document.getElementById("hLeft").textContent= Math.floor(hrsLeft);
document.getElementById("mLeft").textContent= Math.floor(minsLeft);
document.getElementById("sLeft").textContent= Math.floor(secsLeft);

}



function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}