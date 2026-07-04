// ===== ADDITIONAL ANIMATIONS =====

// ===== COUNTER ANIMATION FOR STATS (if any) =====
// قابل توسعه برای آمارها

// ===== PARALLAX EFFECT ON HERO =====
document.querySelector('.hero-section')?.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const image = this.querySelector('.profile-image-wrapper');
    if (image) {
        image.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    }
});

// ===== INTERSECTION OBSERVER FOR TIMELINE =====
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    observer.observe(item);
});
