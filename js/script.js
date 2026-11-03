

// Select Particle Container
const particleContainer = document.getElementById("particles");

// Total Particles
const particleCount = 35;

// Create Particles
if (particleContainer) {

    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        particle.style.animationDelay =
            (Math.random() * 8) + "s";

        const size = 2 + Math.random() * 3;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particleContainer.appendChild(particle);
    }
}


// SYSTEM NOTIFICATION

const notification = document.getElementById(
    "system-notification"
);

if (notification) {

    setTimeout(() => {
        notification.classList.add("show");
    }, 1000);

    setTimeout(() => {
        notification.classList.remove("show");
    }, 5000);

}



/* ADVANCED SCROLL REVEAL */

const revealElements = document.querySelectorAll(`
    .about-section,
    .about-card,
    .skills-section,
    .skill-card,
    .projects-section,
    .project-card,
    .contact-section,
    .contact-card
`);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});

/* =================================
   SYSTEM AWAKENING JAVASCRIPT
================================= */

const awakeningScreen = document.getElementById("awakening-screen");
const awakeningTitle = document.getElementById("awakening-title");
const awakeningMessage = document.getElementById("awakening-message");
const skipAwakening = document.getElementById("skip-awakening");

let awakeningFinished = false;
let awakeningTimers = [];

function finishAwakening() {

    if (awakeningFinished) return;

    awakeningFinished = true;

    // Stop pending messages
    awakeningTimers.forEach(clearTimeout);

    // Create Blue Shockwave
    const shockwave = document.createElement("div");
    shockwave.classList.add("awakening-shockwave");
    awakeningScreen.appendChild(shockwave);

    // Create Blue Screen Flash
    const flash = document.createElement("div");
    flash.classList.add("awakening-flash");
    document.body.appendChild(flash);

    // Remove Flash
    setTimeout(() => {
        flash.remove();
    }, 750);

    // Exit animation
    awakeningScreen.classList.add("awakening-exit");

    // Remove intro after shockwave animation
    setTimeout(() => {
        awakeningScreen.remove();
    }, 1100);
}

function scheduleAwakening(callback, delay) {

    const timer = setTimeout(() => {
        if (!awakeningFinished) {
            callback();
        }
    }, delay);

    awakeningTimers.push(timer);
}

if (awakeningScreen && awakeningTitle && awakeningMessage) {

    // Initial System Message
    awakeningTitle.textContent = "UNKNOWN";
    awakeningMessage.textContent = "SCANNING PLAYER IDENTITY...";

    scheduleAwakening(() => {
        awakeningMessage.textContent = "IDENTITY DETECTED";
    }, 900);

    scheduleAwakening(() => {
        awakeningTitle.textContent = "PLAYER";
        awakeningMessage.textContent = "PLAYER IDENTIFIED";
    }, 1700);

    scheduleAwakening(() => {
        awakeningTitle.textContent = "MEHEDI";
        awakeningMessage.textContent = "WELCOME TO YOUR DIGITAL WORLD";
    }, 2600);

    scheduleAwakening(() => {
        awakeningMessage.textContent = "SYSTEM AWAKENING COMPLETE";
    }, 3400);

    // Unlock Portfolio
    scheduleAwakening(() => {
        finishAwakening();
    }, 4300);

    // Skip Intro
    if (skipAwakening) {
        skipAwakening.addEventListener("click", finishAwakening);
    }

}
/* =================================
   DYNAMIC SYSTEM HUD
================================= */



const systemHud = document.getElementById("system-hud");

if (systemHud) {

    const onlineStatus = systemHud.querySelector(".hud-online");
    const indicator = systemHud.querySelector(".hud-indicator");
    const footer = systemHud.querySelector(".hud-footer span:first-child");

    if (onlineStatus) {
        onlineStatus.textContent = "ONLINE";
    }

    if (indicator) {
        indicator.style.background = "#38bdf8";
    }

    if (footer) {
        footer.textContent = "SYSTEM ACTIVE";
    }
}


/* LIVE SYSTEM CLOCK */

function updateHudClock() {

    const clockElement = document.getElementById("hud-clock");

    if (!clockElement) return;

    const currentTime = new Date();

    clockElement.textContent =
        currentTime.toLocaleTimeString("en-GB", {
            hour12: false
        });
}

// Update immediately
updateHudClock();

// Update every second
setInterval(updateHudClock, 1000);