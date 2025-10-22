const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// ✅ Create the date using numeric arguments (safest method for all browsers)
const targetDate = new Date(2025, 10, 26, 0, 0, 0).getTime(); 
// Month is 0-indexed → 10 = November

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance < 0) {
        Days.textContent = "00";
        Hours.textContent = "00";
        Minutes.textContent = "00";
        Seconds.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    Days.textContent = days;
    Hours.textContent = hours;
    Minutes.textContent = minutes;
    Seconds.textContent = seconds;
}

timer(); // Run once immediately
setInterval(timer, 1000);


