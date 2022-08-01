
const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");


let timerId = null;
    
    function onStartChangeColor(evt) {
        
        startEl.disabled = true;
        stopEl.disabled = false;    
        timerId = setInterval(function getRandomHexColor()  {
        return bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }, 1000); 
           
}
function onStopChangeColor(evt) {
    stopEl.disabled = true;
    startEl.disabled = false;
    clearInterval(timerId);
}

startEl.addEventListener("click", onStartChangeColor);
stopEl.addEventListener("click", onStopChangeColor);