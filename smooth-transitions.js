// Smooth page transitions and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Very rare chance to play flashbang sound on startup (1 in 20)
    if (Math.random() < 0.05) {
        const audio = new Audio('audio/Flashbang Sound Effect.mp3');
        audio.volume = 0.5;
        audio.play().catch(err => console.log('Audio playback prevented:', err));
    }

    // Add smooth fade-in effect to page load
    document.body.style.opacity = '1';
    
    // Smooth scroll behavior for all links
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
    
    // Add hover effects to all buttons
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
    });
    
    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('[class*="animation"], .gallery img, .music-btn').forEach(el => {
        observer.observe(el);
    });
    
    // Add ripple effect on click for buttons
    document.querySelectorAll('.nav a, .music-btn, .home-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Smooth page transition on link click (for internal navigation)
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow external links to work normally
            if (this.target === '_blank' || this.href.includes('http')) {
                return;
            }
            
            e.preventDefault();
            const href = this.href;
            
            // Fade out current page
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.4s ease-out';
            
            // Navigate after fade out
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .nav a, .music-btn, .home-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

