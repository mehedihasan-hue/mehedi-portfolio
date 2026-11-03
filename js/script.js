
// Select Particle Container
const particleContainer = document.getElementById("particles");

// Total Particles
const particleCount = 35;

// Create Particles
for (let i = 0; i < particleCount; i++) {

    // Create New HTML Element
    const particle = document.createElement("span");

    // Add CSS Class
    particle.classList.add("particle");

    // Random Horizontal Position
    particle.style.left = Math.random() * 100 + "%";

    // Random Animation Speed
    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    // Random Starting Time
    particle.style.animationDelay =
        (Math.random() * 8) + "s";

    // Random Size
    const size = 2 + Math.random() * 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Add Particle to Website
    particleContainer.appendChild(particle);
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


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".about-section, .skills-section, .projects-section, .contact-section"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});
