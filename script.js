// Wedding Website JavaScript

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Wedding Date - Change this to your actual wedding date
const weddingDate = new Date('2025-03-25T19:00:00').getTime();

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<div class="text-2xl font-bold text-pink-600">शादी का दिन आ गया! 🎉</div>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Background Music Control
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Audio play failed:', e);
            // Show user-friendly message
            alert('कृपया पेज पर क्लिक करके संगीत चालू करें');
        });
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Auto-play music on user interaction (due to browser policies)
document.addEventListener('click', function() {
    if (!isPlaying && backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Auto-play failed:', e));
    }
}, { once: true });

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// RSVP Form Handling
const rsvpForm = document.querySelector('#rsvp form');
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const phone = formData.get('phone') || this.querySelector('input[type="tel"]').value;
    const attendance = formData.get('attendance');
    const guests = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !phone || !attendance) {
        alert('कृपया सभी आवश्यक फील्ड भरें');
        return;
    }
    
    // Show loading
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> भेजा जा रहा है...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle mr-2"></i>
            धन्यवाद ${name}! आपकी पुष्टि मिल गई है।
        `;
        this.appendChild(successDiv);
        
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        // You can add actual form submission logic here
        // For example, send data to Google Forms or your backend
        console.log('RSVP Data:', { name, phone, attendance, guests, message });
        
    }, 2000);
});

// Gallery Lightbox Effect (Simple Implementation)
const galleryItems = document.querySelectorAll('#gallery .aspect-square');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Simple alert for demo - replace with actual lightbox
        alert('यहाँ आपकी तस्वीरें दिखाई जाएंगी। अपनी तस्वीरें अपलोड करने के लिए gallery फोल्डर में images जोड़ें।');
    });
});

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('bg-white/90');
    } else {
        navbar.classList.add('bg-white/90');
        navbar.classList.remove('bg-white/95');
    }
});

// Add floating animation to hero elements
document.addEventListener('DOMContentLoaded', function() {
    const heroIcon = document.querySelector('#home .fas.fa-heart');
    if (heroIcon) {
        heroIcon.classList.add('float');
    }
});

// WhatsApp Share Function
function shareOnWhatsApp() {
    const message = `🎉 आप सभी को Tanvi & Bharat की शादी में आमंत्रित किया जाता है!\n\n📅 तारीख: 15 फरवरी 2025\n⏰ समय: शाम 7:00 बजे\n\nकृपया इस लिंक पर जाकर RSVP करें: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add WhatsApp share functionality to footer WhatsApp icon
document.addEventListener('DOMContentLoaded', function() {
    const whatsappIcon = document.querySelector('footer .fab.fa-whatsapp').parentElement;
    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', function(e) {
            e.preventDefault();
            shareOnWhatsApp();
        });
    }
});

// Preload critical resources
function preloadResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    preloadResources();
    
    // Add any additional initialization here
    console.log('Wedding Website Loaded Successfully! 💕');
    
    // Add some sparkle effect (optional)
    createSparkles();
});

// Sparkle Effect (Optional decorative feature)
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '1000';
    document.body.appendChild(sparkleContainer);
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.opacity = Math.random();
        sparkle.style.animation = `sparkle ${Math.random() * 3 + 2}s linear infinite`;
        
        sparkleContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 5000);
    }
    
    // Create sparkles periodically
    setInterval(createSparkle, 3000);
}

// Add sparkle animation CSS
const sparkleCSS = `
@keyframes sparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    50% { transform: scale(1) rotate(180deg); opacity: 1; }
    100% { transform: scale(0) rotate(360deg); opacity: 0; }
}
`;

const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);