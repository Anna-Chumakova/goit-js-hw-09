import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector("#datetime-picker");
const startBtnEl = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtnEl.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let timerId = null;
        if (selectedDates[0] <= Date.now()) {
            clearInterval(timerId);
            return window.alert("Please choose a date in the future");
        }
        startBtnEl.disabled = false;
        startBtnEl.addEventListener("click", onTimer);
        function onTimer() {
            timerId = setInterval(() => {
                let deltaTime = selectedDates[0] - Date.now();
                convertMs(deltaTime);
            }, 1000);
        }
    }
};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

}




 
   //    const seconds = Math.floor(deltaTime / 1000) % 60;
    //    const minutes = Math.floor(deltaTime / 1000 / 60) % 60;
    //    const hours = Math.floor(deltaTime / 1000 / 60 / 60) % 24;
    //    const days = Math.floor(deltaTime / 1000 / 60 / 60 / 24);

      //  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
        ///minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
     //   hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
     //   dayEl.textContent = days < 10 ? `0${days}` : days;
    
   

    
