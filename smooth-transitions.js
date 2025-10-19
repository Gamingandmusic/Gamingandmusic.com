// Smooth page transitions and interactive effects
// Detect mobile and browser capabilities
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouch = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Check if Live.html - if so, skip verification requirement
const isLivePage = window.location.pathname.includes('Live.html');

// Block content until Cloudflare verification
let verificationComplete = false;

// Function to unlock page content
function unlockPageContent() {
    console.log('unlockPageContent called');

    // Show container
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'block';
    }

    // Show footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded - isLivePage:', isLivePage);
    // Block all interactive elements until verification is complete (except on Live.html)
    if (!isLivePage) {
        console.log('Blocking page content...');
        blockPageContent();
    }

    // Very rare chance to play flashbang sound on startup (1 in 20)
    if (Math.random() < 0.05) {
        const audio = new Audio('audio/Flashbang Sound Effect.mp3');
        audio.volume = 0.5;
        audio.play().catch(err => console.log('Audio playback prevented:', err));
    }

    // Hide Cloudflare Turnstile widget after completion and unlock content
    window.onTurnstileSuccess = function(token) {
        console.log('Turnstile verification successful!', token);
        verificationComplete = true;

        // Save verification status to localStorage
        localStorage.setItem('cloudflare-verified', 'true');
        console.log('Verification saved to localStorage');

        // Remove widget completely
        const widget = document.querySelector('.cf-turnstile');
        if (widget) {
            widget.remove();
        }

        // Unlock page content
        console.log('Unlocking page content...');
        unlockPageContent();
    };

    // Make it globally accessible
    window.onTurnstileSuccess = window.onTurnstileSuccess;

    // Fallback: Monitor for widget state changes
    if (window.turnstile) {
        window.turnstile.ready(function() {
            // Check periodically if widget is completed
            const checkInterval = setInterval(function() {
                const widget = document.querySelector('.cf-turnstile');
                if (!widget) {
                    clearInterval(checkInterval);
                    return;
                }

                // Check if widget has the success class or data attribute
                if (widget.classList.contains('success') ||
                    widget.getAttribute('data-state') === 'managed' ||
                    widget.querySelector('[data-state="managed"]')) {
                    clearInterval(checkInterval);
                    window.onTurnstileSuccess();
                }
            }, 100);

            // Stop checking after 60 seconds
            setTimeout(() => clearInterval(checkInterval), 60000);
        });
    }

    // Additional fallback: Use MutationObserver for DOM changes
    const widget = document.querySelector('.cf-turnstile');
    if (widget) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Check if any child elements were added/removed (indicating completion)
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    const currentWidget = document.querySelector('.cf-turnstile');
                    if (currentWidget && (
                        currentWidget.querySelector('iframe[title*="success"]') ||
                        currentWidget.querySelector('[data-state="managed"]') ||
                        currentWidget.classList.contains('success')
                    )) {
                        observer.disconnect();
                        window.onTurnstileSuccess();
                    }
                }
            });
        });

        observer.observe(widget, {
            childList: true,
            attributes: true,
            subtree: true,
            attributeFilter: ['data-state', 'class']
        });
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
    
    // Add ripple effect on click for buttons (skip on mobile for performance)
    if (!isMobile) {
        document.querySelectorAll('.nav a, .music-btn, .home-link').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = (e.clientX || e.touches?.[0]?.clientX || 0) - rect.left - size / 2;
                const y = (e.clientY || e.touches?.[0]?.clientY || 0) - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Add touch feedback for mobile
    if (isMobile || isTouch()) {
        document.querySelectorAll('.nav a, .music-btn, .home-link').forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
            });
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
    
    // Smooth page transition on link click (for internal navigation)
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow external links to work normally
            if (this.target === '_blank' || this.href.includes('http')) {
                return;
            }

            e.preventDefault();
            const href = this.href;

            // Respect prefers-reduced-motion
            if (prefersReducedMotion) {
                window.location.href = href;
                return;
            }

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

// Add ripple effect styles dynamically with mobile optimizations
const style = document.createElement('style');
style.textContent = `
    .nav a, .music-btn, .home-link {
        position: relative;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
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

    /* Mobile optimizations */
    @media (max-width: 768px) {
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        body {
            overflow-x: hidden;
        }

        .cf-turnstile {
            transform: scale(0.9);
            transform-origin: center;
        }
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    /* High DPI screens */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .nav a, .music-btn, .home-link {
            border-width: 1px;
        }
    }

    /* Verification overlay styles */
    .verification-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        pointer-events: auto;
    }

    .verification-overlay.hidden {
        display: none;
        pointer-events: none;
    }

    .page-content.blocked {
        pointer-events: none;
        opacity: 0.5;
        filter: blur(2px);
    }

    .page-content.blocked a,
    .page-content.blocked button {
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

