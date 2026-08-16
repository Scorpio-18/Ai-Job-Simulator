
const ctaButton = document.querySelector('.cta-button');
const botButton = document.querySelector('.bot2');

// Mobile Navigation Toggle
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// IntersectionObserver for feature item animations
const featureItems = document.querySelectorAll('.feature-item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const item = entry.target;
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            observer.unobserve(item); // Animate only once
        }
    });
}, {
    threshold: 0.2
});

featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 1.5s ease';
    observer.observe(item);
});

// Button to open bot.html
ctaButton.addEventListener('click', function () {
    window.open('bot.html', '_blank');
});

botButton.addEventListener('click', function () {
    window.open('bot.html', '_blank');
});

// Scroll to top when page is loaded
window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
};