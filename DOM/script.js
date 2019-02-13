var h1 =document.querySelector("h1");
var btn = document.querySelector("button");
btn.addEventListener("click",clickE);
var flg = false;
setInterval(changeColor,500);

function changeColor()
{
    if (flg)
    {
        console.log("start function")
        if(h1.style.color == "red")
        {
            console.log("change color to blue")
            h1.style.color = "blue";
            h1.textContent ="change color to blue";
        }
        else
        {
            h1.style.color = "red";
            h1.textContent = "color is red";
        }

    }   



}

function clickE() {
    if(flg)
        flg =false;
        else
        flg = true;

}