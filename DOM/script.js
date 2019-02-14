var h1 =document.querySelector("h1");
var h2 =document.querySelector("h2");
var btn = document.querySelector("button");
btn.addEventListener("click",clickE);
var flg = false;
setInterval(changeColor,500);

var weddingday = {

}
function changeColor()
{
    if (flg)
    {
        var currentdate = new Date();
        var weddingday = new Date(2019,7,27);
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
        // weddingday -= currentdate;
        var diff = new Date(weddingday.getTime() - currentdate.getTime());
        var datetime = "Last Sync: " + diff.getDay() + "/"+diff.getMonth() 
                        + "/" + (diff.getFullYear() - 1970) + " @ " 
                        + diff.getHours() + ":" 
                        + diff.getMinutes() + ":" + diff.getSeconds();

        h2.textContent = datetime;
        // (currentdate - new Date(2019,7,27,19,30,00);
        

    }   



}

function clickE() {
    if(flg)
        flg =false;
        else
        flg = true;

}