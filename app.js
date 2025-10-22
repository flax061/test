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

// ✅ Use ISO format for cross-browser compatibility
const targetDate = new Date("2025-11-26T00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    Days.textContent = days;
    Hours.textContent = hours;
    Minutes.textContent = minutes;
    Seconds.textContent = seconds;

    if (distance < 0) {
        Days.textContent = "00";
        Hours.textContent = "00";
        Minutes.textContent = "00";
        Seconds.textContent = "00";
    }
}

timer(); // Run once immediately
setInterval(timer, 1000);
