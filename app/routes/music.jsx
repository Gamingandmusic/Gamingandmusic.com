import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import musicStyles from '~/styles/music.css?url';

export const meta = () => [
  { title: 'Music | Gamingandmusic - Listen on All Platforms' },
  {
    name: 'description',
    content: 'Listen to Gamingandmusic on Spotify, YouTube, Apple Music, Tidal, Amazon Music, and SoundCloud. Discover gaming and electronic music.',
  },
  {
    name: 'keywords',
    content: 'music streaming, Spotify, YouTube Music, Apple Music, Tidal, Amazon Music, SoundCloud, gaming music',
  },
  { name: 'author', content: 'Gamingandmusic' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://gamingandmusic.github.io/music' },
  { property: 'og:title', content: 'Music - Gamingandmusic' },
  {
    property: 'og:description',
    content: 'Listen to Gamingandmusic on all major music streaming platforms.',
  },
  { property: 'og:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Music - Gamingandmusic' },
  {
    name: 'twitter:description',
    content: 'Listen to Gamingandmusic on all major music streaming platforms.',
  },
  { name: 'twitter:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
];

export const links = () => [
  { rel: 'stylesheet', href: musicStyles },
];

const musicPlatforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/6FcSk3WwFmeXm4ZLoxJr1K', icon: 'Spotify_Logo.png', className: 'spotify' },
  { name: 'YouTube', url: 'https://youtube.com/@YOUR_CHANNEL', icon: 'YouTube_Logo.png', className: 'youtube' },
  { name: 'Apple Music', url: 'https://music.apple.com/artist/YOUR_ARTIST_ID', icon: 'Apple_Music_Logo.png', className: 'apple' },
  { name: 'Tidal', url: 'https://tidal.com/artist/YOUR_ARTIST_ID', icon: 'Tidal_Logo.png', className: 'tidal' },
  { name: 'Amazon Music', url: 'https://amazon.com/music/YOUR_ARTIST_URL', icon: 'Amazon_Music_Logo.png', className: 'amazon' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/YOUR_USERNAME', icon: 'SoundCloud_Logo.png', className: 'soundcloud' },
];

export default function Music() {
  return (
    <div className="music-container">
      <div className="container">
        <h1>Music Streaming</h1>
        <div className="music-links">
          {musicPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`music-btn ${platform.className}`}
              title={`Listen on ${platform.name}`}
            >
              <img src={`/images/Logos/${platform.icon}`} alt={platform.name} />
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
        <Link to="/" className="home-link">
          Back to Home
        </Link>

        {/* Desktop embeds grid */}
        <div className="embeds-grid">
          <div className="iframe-container youtube">
            <iframe
              src="https://www.youtube.com/embed/FUZHxLHLnyw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="iframe-container youtube">
            <iframe
              src="https://www.youtube.com/embed/OOBTOPp4Rvg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="spotify-embed-wrapper">
            <div className="iframe-container spotify">
              <iframe
                src="https://open.spotify.com/embed/artist/6FcSk3WwFmeXm4ZLoxJr1K?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}