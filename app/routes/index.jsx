import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import indexStyles from './index.css?url';

export const meta = () => [
  { title: 'Gamingandmusic - Independent Music Artist' },
  {
    name: 'description',
    content: 'Independent music artist creating gaming and electronic music. Listen on Spotify, YouTube, Apple Music, and more.',
  },
  {
    name: 'keywords',
    content: 'music, gaming, electronic music, artist, composer, Spotify, YouTube',
  },
  { name: 'author', content: 'Gamingandmusic' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://gamingandmusic.github.io/' },
  { property: 'og:title', content: 'Gamingandmusic - Independent Music Artist' },
  {
    property: 'og:description',
    content: 'Independent music artist creating gaming and electronic music. Listen on all major platforms.',
  },
  { property: 'og:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
  { property: 'og:site_name', content: 'Gamingandmusic' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Gamingandmusic - Independent Music Artist' },
  {
    name: 'twitter:description',
    content: 'Independent music artist creating gaming and electronic music. Listen on all major platforms.',
  },
  { name: 'twitter:image', content: 'https://gamingandmusic.github.io/images/Gaming-image.png' },
  { rel: 'canonical', href: 'https://gamingandmusic.github.io/' },
];

export const links = () => [
  { rel: 'stylesheet', href: indexStyles },
];

export default function Index() {
  return (
    <div className="index-container">
      <div className="container">
        <h1>Gamingandmusic</h1>
        <img
          src="/images/Gaming-image.png"
          alt="Gamingandmusic Avatar"
          className="avatar"
        />
        <nav className="nav">
          <Link to="/music">Music</Link>
          <Link to="/avatar">Avatar</Link>
          <Link to="/live">Live</Link>
        </nav>
        <hr style={{
          height: '6px',
          background: 'linear-gradient(to right, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #9933ff)',
          backgroundSize: '600% 100%',
          border: 'none',
          margin: '5vh 0',
          width: '100%',
          maxWidth: '100vw',
          animation: 'rainbowSlide 8s linear infinite',
        }} />
      </div>
      <Footer />
    </div>
  );
}