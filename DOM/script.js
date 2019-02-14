var h1 =document.querySelector("h1");
var h2 =document.querySelector("h2");
var btn = document.getElementsByTagName("button")[1];
var btndate = document.getElementsByTagName("button")[0];
btn.addEventListener("click",clickE);
btndate.addEventListener("click",Setdate);

var temp =document.getElementById("date");
var flg = false;
var weddingday = new Date(2019,2,20);
setInterval(changeColor,500);

function changeColor()
{
    if (flg)
    {
        var currentdate = new Date();
        
        var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth() 
                        + "/" + currentdate.getFullYear() + " @ " 
                        + currentdate.getHours() + ":" 
                        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        h1.textContent = datetime;
        // var kjkj = new date(Number(weddingday.getFullYear()) - currentdate.getFullYear(),
        // Number(weddingday.getMonth()) - Number(currentdate.getMonth()),
        // Number(weddingday.getDay()) - Number(currentdate.getDay()),
        // Number( weddingday.getHours()) - Number(currentdate.getHours()),
        // Number( weddingday.getMinutes()) -Number( currentdate.getMinutes()),
        // Number(weddingday.getSeconds()) -Number( currentdate.getSeconds()));
        // console.log(weddingday.get());
        console.log(weddingday.getMonth());


        var d1 =currentdate;
        var d2 = weddingday;
        var DateDiff = {

            inDays: function(d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2-t1)/(24*3600*1000));
            },

            inWeeks: function(d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2-t1)/(24*3600*1000*7));
            },

            inMonths: function(d1, d2) {
                var d1Y = d1.getFullYear();
                var d2Y = d2.getFullYear();
                var d1M = d1.getMonth();
                var d2M = d2.getMonth();

                return (d2M+12*d2Y)-(d1M+12*d1Y);
            },

            inYears: function(d1, d2) {
                return d2.getFullYear()-d1.getFullYear();
            }
        }

        h2.textContent = "in :"  + DateDiff.inYears(d1,d2) + " Years ," + DateDiff.inMonths(d1,d2) + " Months, " + DateDiff.inDays(d1,d2) +" in dayes";
        // (currentdate - new Date(2019,7,27,19,30,00);
        

    }
}

function clickE() {
    if(flg)
        flg =false;
        else
        flg = true;
        //weddingday =document.getElementById("date");
        
}

function Setdate() {
    temp =document.getElementById("date");
    weddingday = temp.valueAsDate;
        
}