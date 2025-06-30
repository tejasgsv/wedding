// Enhanced Wedding Website JavaScript

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Wedding Date
const weddingDate = new Date('2025-03-25T19:00:00').getTime();

// Enhanced Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling and active nav
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Scroll spy for navigation
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

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
        document.getElementById('countdown').innerHTML = '<div class="text-3xl font-bold gradient-text">The Big Day is Here! 🎉</div>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Event Details Data
const eventDetails = {
    haldi: {
        emoji: '🌻',
        title: 'Haldi Ceremony',
        date: 'March 23, 2025',
        time: '10:00 AM - 12:00 PM',
        venue: 'Family Home Garden',
        address: '456 Garden Street, City, State - 123456',
        dress: 'Yellow Traditional Attire',
        notes: [
            '• Turmeric ceremony for good luck',
            '• Light breakfast will be served',
            '• Photography encouraged',
            '• Outdoor venue - weather dependent'
        ]
    },
    mehndi: {
        emoji: '🎨',
        title: 'Mehndi Ceremony',
        date: 'March 23, 2025',
        time: '4:00 PM - 8:00 PM',
        venue: 'Community Hall',
        address: '789 Community Lane, City, State - 123456',
        dress: 'Green/Pink Traditional Attire',
        notes: [
            '• Henna artists will be available',
            '• Music and dance performances',
            '• Snacks and refreshments',
            '• Ladies special event'
        ]
    },
    sangeet: {
        emoji: '🎵',
        title: 'Sangeet Night',
        date: 'March 24, 2025',
        time: '7:00 PM - 11:00 PM',
        venue: 'Grand Ballroom',
        address: '321 Dance Avenue, City, State - 123456',
        dress: 'Party Wear / Indo-Western',
        notes: [
            '• Live DJ and music',
            '• Dance performances by families',
            '• Dinner and cocktails',
            '• Open dance floor'
        ]
    },
    wedding: {
        emoji: '💍',
        title: 'Wedding Ceremony',
        date: 'March 25, 2025',
        time: '7:00 PM - 10:00 PM',
        venue: 'Grand Wedding Hall',
        address: '123 Main Street, City, State - 123456',
        dress: 'Traditional Indian Attire',
        notes: [
            '• Sacred wedding rituals',
            '• Photography allowed',
            '• Dinner will be served',
            '• Parking available',
            '• Air conditioned venue'
        ]
    },
    reception: {
        emoji: '🥂',
        title: 'Reception Party',
        date: 'March 26, 2025',
        time: '8:00 PM - 12:00 AM',
        venue: 'Luxury Hotel Banquet',
        address: '987 Celebration Blvd, City, State - 123456',
        dress: 'Cocktail Dress / Formal Wear',
        notes: [
            '• Cocktail hour and dinner',
            '• Live band and DJ',
            '• Wedding cake ceremony',
            '• Dancing and celebration',
            '• Valet parking available'
        ]
    }
};

// Show Event Details
function showEventDetails(eventType) {
    const event = eventDetails[eventType];
    const detailsContainer = document.getElementById('eventDetails');
    
    detailsContainer.innerHTML = `
        <div class="text-center">
            <div class="text-8xl mb-8">${event.emoji}</div>
            <h3 class="text-4xl font-bold gradient-text mb-6 font-script">${event.title}</h3>
            <div class="grid md:grid-cols-2 gap-8 text-left">
                <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">📅 Date & Time</h4>
                    <p class="text-gray-600 mb-2">${event.date}</p>
                    <p class="text-gray-600 mb-6">${event.time}</p>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">📍 Venue</h4>
                    <p class="text-gray-600 mb-2">${event.venue}</p>
                    <p class="text-gray-600 mb-6">${event.address}</p>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">👗 Dress Code</h4>
                    <p class="text-gray-600 mb-6">${event.dress}</p>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">📝 Special Notes</h4>
                    ${event.notes.map(note => `<p class="text-gray-600 mb-2">${note}</p>`).join('')}
                </div>
            </div>
            <div class="flex justify-center space-x-4 mt-8">
                <button onclick="addToCalendar('${eventType}')" class="btn-gradient text-white px-6 py-3 rounded-2xl font-semibold">
                    <i class="fas fa-calendar-plus mr-2"></i>Add to Calendar
                </button>
                <button onclick="getDirections('${eventType}')" class="bg-white text-pink-600 border-2 border-pink-500 px-6 py-3 rounded-2xl font-semibold hover:bg-pink-50 transition-all">
                    <i class="fas fa-map-marker-alt mr-2"></i>Get Directions
                </button>
                <button onclick="shareEvent('${eventType}')" class="bg-white text-orange-600 border-2 border-orange-500 px-6 py-3 rounded-2xl font-semibold hover:bg-orange-50 transition-all">
                    <i class="fas fa-share-alt mr-2"></i>Share Event
                </button>
            </div>
        </div>
    `;
    
    // Scroll to details section
    document.getElementById('details').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add to Calendar
function addToCalendar(eventType) {
    const event = eventDetails[eventType];
    const startDate = new Date(event.date + ' ' + event.time.split(' - ')[0]);
    const endDate = new Date(event.date + ' ' + event.time.split(' - ')[1]);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent('Wedding celebration event')}&location=${encodeURIComponent(event.address)}`;
    
    window.open(googleCalendarUrl, '_blank');
}

// Get Directions
function getDirections(eventType) {
    const event = eventDetails[eventType];
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`;
    window.open(mapsUrl, '_blank');
}

// Share Functions
function shareInvitation() {
    document.getElementById('shareModal').classList.remove('hidden');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.add('hidden');
}

function shareWhatsApp() {
    const message = `🎉 You're invited to Priya & Rahul's Wedding!

💒 Wedding Date: March 25, 2025 at 7:00 PM
📍 Venue: Grand Wedding Hall

Join us for our special celebration:
🌻 Haldi - March 23, 10:00 AM
🎨 Mehndi - March 23, 4:00 PM  
🎵 Sangeet - March 24, 7:00 PM
💍 Wedding - March 25, 7:00 PM
🥂 Reception - March 26, 8:00 PM

Please RSVP: ${window.location.href}

Looking forward to celebrating with you! 💕`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeShareModal();
}

function shareEvent(eventType) {
    const event = eventDetails[eventType];
    const message = `🎉 You're invited to ${event.title}!

📅 ${event.date} at ${event.time}
📍 ${event.venue}
👗 Dress Code: ${event.dress}

Join Priya & Rahul's wedding celebration!
RSVP: ${window.location.href}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Invitation link copied to clipboard!');
        closeShareModal();
    });
}

function downloadInvitation() {
    // Create a simple invitation card
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 1000;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 1000);
    gradient.addColorStop(0, '#fdf2f8');
    gradient.addColorStop(1, '#fef3e2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 1000);
    
    // Text
    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 60px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Priya & Rahul', 400, 200);
    
    ctx.fillStyle = '#6b7280';
    ctx.font = '30px serif';
    ctx.fillText('Wedding Invitation', 400, 300);
    ctx.fillText('March 25, 2025 • 7:00 PM', 400, 400);
    ctx.fillText('Grand Wedding Hall', 400, 450);
    
    // Download
    const link = document.createElement('a');
    link.download = 'wedding-invitation.png';
    link.href = canvas.toDataURL();
    link.click();
    
    closeShareModal();
}

// Music Control
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
        });
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// RSVP Form
document.querySelector('#rsvp form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const phone = formData.get('phone') || this.querySelector('input[type="tel"]').value;
    const events = Array.from(this.querySelectorAll('input[name="events"]:checked')).map(cb => cb.value);
    const guests = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    if (!name || !phone || events.length === 0 || !guests) {
        alert('Please fill in all required fields');
        return;
    }
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading-heart">💖</span> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-bounce bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl mt-6';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle mr-2"></i>
            Thank you ${name}! Your RSVP has been confirmed for ${events.length} event(s).
        `;
        this.appendChild(successDiv);
        
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        console.log('RSVP Data:', { name, phone, events, guests, message });
    }, 2000);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced Wedding Website Loaded! 💕');
    
    // Show default wedding details
    showEventDetails('wedding');
});