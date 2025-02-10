// Initialize AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// Add scroll-based parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.about-hero');
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Add hover effect for team cards
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const overlay = e.currentTarget.querySelector('.team-overlay');
        overlay.style.opacity = '1';
    });

    card.addEventListener('mouseleave', (e) => {
        const overlay = e.currentTarget.querySelector('.team-overlay');
        overlay.style.opacity = '0';
    });
});

// Add loading animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add random animation delay to social icons
document.querySelectorAll('.social-links a').forEach(link => {
    link.style.animationDelay = `${Math.random() * 0.5}s`;
}); 