import footerStyles from './Footer.module.css';

const socialLinks = [
  { icon: 'Instagram_Glyph_Gradient.png', url: 'https://instagram.com', alt: 'Instagram' },
  { icon: 'YouTube_Logo.png', url: 'https://youtube.com', alt: 'YouTube' },
  { icon: 'TikTok_Icon_Black_Circle.png', url: 'https://tiktok.com', alt: 'TikTok' },
  { icon: 'Spotify_Logo.png', url: 'https://spotify.com', alt: 'Spotify' },
  { icon: 'SoundCloud_Logo.png', url: 'https://soundcloud.com', alt: 'SoundCloud' },
  { icon: 'Apple_Music_Logo.png', url: 'https://music.apple.com', alt: 'Apple Music' },
  { icon: 'Amazon_Music_Logo.png', url: 'https://amazon.com/music', alt: 'Amazon Music' },
  { icon: 'Tidal_Logo.png', url: 'https://tidal.com', alt: 'Tidal' },
];

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerLinks}>
          <a href="/">Home</a>
          <a href="/music">Music</a>
          <a href="/avatar">Avatar</a>
          <a href="/live">Live</a>
        </div>
        <div className={footerStyles.footerDivider}></div>
        <div className={footerStyles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.alt}
            >
              <img
                src={`/images/Logos/${link.icon}`}
                alt={link.alt}
              />
            </a>
          ))}
        </div>
        <div className={footerStyles.footerBottom}>
          <p>&copy; 2024 Gamingandmusic. All rights reserved.</p>
          <p>Independent Music Artist | Gaming & Electronic Music</p>
        </div>
      </div>
    </footer>
  );
}