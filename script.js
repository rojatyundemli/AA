let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showLove() {
    document.getElementById("heart").classList.remove("hidden");
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const gallery = document.getElementById('gallery');
    
    envelope.classList.add('open');
    showHearts();
    createConfetti();
    
    // Mektubu göster
    setTimeout(() => {
        letter.classList.add('show');
    }, 1000);
    
    // Galeriyi göster
    setTimeout(() => {
        gallery.classList.add('show');
    }, 2000);
}

function showHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.opacity = '1';
    });
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#ffd700', '#ff69b4', '#4ecdc4', '#45b7d1'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);
    }
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Sayfa yüklendiğinde çiçekleri göster
window.onload = function() {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.style.opacity = '1';
    });
};

// Global scope'a fonksiyonu ekleyelim
window.openEnvelope = function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const gallery = document.getElementById('gallery');
    const timeline = document.getElementById('timeline');
    
    envelope.classList.add('open');
    showHearts();
    createConfetti();
    
    // Mektubu göster
    setTimeout(() => {
        letter.classList.add('show');
    }, 1000);
    
    // Galeriyi göster
    setTimeout(() => {
        gallery.classList.add('show');
    }, 2000);

    // Timeline'ı göster
    setTimeout(() => {
        timeline.classList.add('show');
    }, 3000);
}
