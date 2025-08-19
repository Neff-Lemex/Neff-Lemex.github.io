// Timer
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("October 2 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    
}

setInterval(timer, 1000);

// Parallax
let text = document.getElementById('text');
let ref1 = document.getElementById('ref1');
let ref11 = document.getElementById('ref11');
let ref2 = document.getElementById('ref2');
let ref3 = document.getElementById('ref3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';

    ref1.style.top = value * -0.1 + 'px';
    ref1.style.left = value * -1.0 + 'px';

    ref11.style.top = value * -0.1 + 'px';
    ref11.style.left = value * 1.5 + 'px';

    // ref2.style.top = value * 1.5 + 'px';
    ref2.style.top = Math.min(value * 1.5, ref2.height) + 'px';
    ref3.style.top = Math.min(value * 1.2, ref3.height) + 'px';
    // ref3.style.top = value * 1.0 + 'px';
    

})

// Secret code
document.getElementById("link").addEventListener("click", function () {
      const password = document.getElementById("password").value;

      // Validate input
      if (password === "Jim") {
        window.location.href = "message.html"; 
      } else {
        alert("Wrong.");
      }
});