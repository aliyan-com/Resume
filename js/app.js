// ===== PRELOADER =====
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1200);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== TYPEWRITER EFFECT =====
const typewriterElement = document.getElementById('typewriter');
const texts = [
    'فول استک دولوپر',
    'متخصص شبکه',
    'هوش مصنوعی',
    'DevOps',
    'معمار نرم‌افزار'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        setTimeout(typeEffect, typeSpeed);
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
            return;
        }
        setTimeout(typeEffect, typeSpeed / 2);
    }
}
typeEffect();

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ===== DOWNLOAD CV BUTTON =====
document.getElementById('downloadCV')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('لینک دانلود رزومه در اینجا قرار می‌گیرد.\nفایل PDF رزومه خود را در مسیر مناسب قرار دهید.');
});

// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>در حال ارسال...';
    btn.disabled = true;
    setTimeout(() => {
        alert('✅ پیام شما با موفقیت ارسال شد!');
        btn.innerHTML = originalText;
        btn.disabled = false;
        this.reset();
    }, 2000);
});

// ===== INITIALIZE AOS =====
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});
