var lastDateTime = new Date(2019,5,27,19,30,0,0); // YYYY (M-1) D H m s ms (start time and date from DB)
var lastStamp = lastDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((lastStamp-newStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    var text =   " שניות "+s+" דקות " +m +" שעות "+h+" ימים " + d + " החתונה בעוד";
    document.getElementById("time-elapsed").innerHTML = text; //d+" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) working";
}

timer = setInterval(updateClock, 1000);