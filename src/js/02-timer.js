import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const inputEl = document.querySelector("#datetime-picker");
const startBtnEl = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtnEl.disabled = true; 

const onClose = function (selectedDates) {

    if (selectedDates[0] <= Date.now()) {
            return Notify.info("Please choose a date in the future");
       }
startBtnEl.disabled = false;        

startBtnEl.addEventListener("click", onTimer);
    
    function onTimer () {
        
        let timerId = setInterval(() => {
            let deltaTime = selectedDates[0] - Date.now();
             if (deltaTime < 1000) {
                 clearInterval(timerId);
               }
            fillDate(deltaTime);
        }, 1000);        
    };      
    
};
          
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose,
};

flatpickr(inputEl, options);

function fillDate(ms) {
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds; 
}

   

    
