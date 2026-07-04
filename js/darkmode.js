// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 2px 30px rgba(0,0,0,0.08)';
    }
});
