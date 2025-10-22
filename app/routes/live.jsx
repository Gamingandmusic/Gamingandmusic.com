import { useEffect } from 'react';
import Footer from '~/components/Footer';
import liveStyles from '~/styles/live.css?url';

export const meta = () => [
  { title: 'Live Stream | Gamingandmusic' },
  {
    name: 'description',
    content: 'Watch live streams from Gamingandmusic. Join for gaming and music performances.',
  },
  {
    name: 'keywords',
    content: 'live stream, gaming, music performance, live music, streaming',
  },
  { name: 'author', content: 'Gamingandmusic' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://gamingandmusic.github.io/live' },
  { property: 'og:title', content: 'Live Stream - Gamingandmusic' },
  {
    property: 'og:description',
    content: 'Watch live streams from Gamingandmusic. Join for gaming and music performances.',
  },
  { property: 'og:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Live Stream - Gamingandmusic' },
  {
    name: 'twitter:description',
    content: 'Watch live streams from Gamingandmusic.',
  },
  { name: 'twitter:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
];

export const links = () => [
  { rel: 'stylesheet', href: liveStyles },
];

export default function Live() {
  useEffect(() => {
    // Load Turnstile script for verification
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.defer = true;
    script.onload = initTurnstile;
    script.onerror = () => console.error('Failed to load Turnstile');
    document.head.appendChild(script);
  }, []);

  const initTurnstile = () => {
    if (window.turnstile) {
      const widget = document.getElementById('turnstile-widget');
      if (widget && !widget.hasAttribute('data-rendered')) {
        try {
          window.turnstile.render('#turnstile-widget', {
            sitekey: '0x4AAAAAAB7gLuZQcG3FQ9fR',
            callback: 'onTurnstileSuccess',
            'error-callback': 'onTurnstileError',
            theme: 'dark',
            language: 'auto',
          });
        } catch (e) {
          console.error('Error rendering Turnstile:', e);
        }
      }
    } else {
      setTimeout(initTurnstile, 500);
    }
  };

  window.onTurnstileError = function(errorData) {
    console.error('Turnstile error:', errorData);
    if (!window.turnstileRetries) {
      window.turnstileRetries = 0;
    }
    if (window.turnstileRetries < 3 && window.turnstile) {
      window.turnstileRetries++;
      setTimeout(initTurnstile, 1000);
    }
  };

  return (
    <div className="live-container">
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://player.vdocipher.com/live-v2?liveId=c5c9118d07a54297a4bd1dbee4e3b72c"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          id="turnstile-widget"
          className="cf-turnstile"
          data-sitekey="0x4AAAAAAB7gLuZQcG3FQ9fR"
          data-callback="onTurnstileSuccess"
          data-theme="dark"
          data-language="auto"
        ></div>
        <hr
          style={{
            height: '6px',
            background: 'linear-gradient(to right, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #9933ff)',
            backgroundSize: '600% 100%',
            border: 'none',
            margin: '40px 0 0 0',
            width: '100%',
            maxWidth: '100vw',
            animation: 'rainbowSlide 8s linear infinite',
          }}
        />
      </div>
      <Footer />
    </div>
  );
}