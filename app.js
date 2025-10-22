const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const Days = document.getElementById('days');
    const Hours = document.getElementById('hours');
    const Minutes = document.getElementById('minutes');
    const Seconds = document.getElementById('seconds');

    // ✅ Safest date format (numeric arguments, no parsing)
    const targetDate = new Date("2025-10-26T00:00:00").getTime(); 
    // Month is 0-indexed → 10 = November

    function timer() {
        const currentDate = new Date().getTime();
        
        const distance = targetDate - currentDate;

        if (isNaN(distance)) {
            console.warn("⛔ Invalid date or NaN detected");
            return;
        }

        if (distance <= 0) {
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

        Days.textContent = days.toString().padStart(2, '0');
        Hours.textContent = hours.toString().padStart(2, '0');
        Minutes.textContent = minutes.toString().padStart(2, '0');
        Seconds.textContent = seconds.toString().padStart(2, '0');
    }

    timer(); // run immediately once
    setInterval(timer, 1000);
});





