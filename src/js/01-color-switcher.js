
const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

stopEl.disabled = true;
let timerId = null;

startEl.addEventListener("click", onStartChangeColor);
stopEl.addEventListener("click", onStopChangeColor);    
    
function onStartChangeColor(evt) {
        
        startEl.disabled = true;
        stopEl.disabled = false;    
        timerId = setInterval( () => {
            return bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000); 
           
}

function onStopChangeColor(evt) {
    startEl.disabled = false;
    stopEl.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}