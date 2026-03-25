// Logic for Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
            isMenuOpen = false;
        });
    });

// Inisialisasi Ikon Lucide
lucide.createIcons();

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cek preferensi user saat pertama dimuat
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Event listener untuk tombol toggle
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
});

// --- Typing Effect Logic ---
const textArray = ["Fintech.", "Transaksi Cepat.", "Sistem Kasir."];
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;
const typedTextSpan = document.getElementById("typed-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// Mulai efek ketikan setelah DOM siap
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// --- Scroll Reveal Logic ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, {
    root: null,
    threshold: 0.15 
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});
