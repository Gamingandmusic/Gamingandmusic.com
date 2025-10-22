import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import avatarStyles from './avatar.css?url';

export const meta = () => [
  { title: 'Avatar Work | Gamingandmusic - Commission Custom Artwork' },
  {
    name: 'description',
    content: 'Commission custom gaming avatars and artwork from Gamingandmusic. Professional digital art and character design services.',
  },
  {
    name: 'keywords',
    content: 'avatar commission, digital art, character design, gaming art, custom artwork, commission artist',
  },
  { name: 'author', content: 'Gamingandmusic' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://gamingandmusic.github.io/avatar' },
  { property: 'og:title', content: 'Commission Artwork - Gamingandmusic' },
  {
    property: 'og:description',
    content: 'Commission custom gaming avatars and artwork from Gamingandmusic. Professional digital art services.',
  },
  { property: 'og:image', content: 'https://gamingandmusic.github.io/images/Gaming%20avi%20examples/fenic.png' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Commission Artwork - Gamingandmusic' },
  {
    name: 'twitter:description',
    content: 'Commission custom gaming avatars and artwork from Gamingandmusic.',
  },
  { name: 'twitter:image', content: 'https://gamingandmusic.github.io/images/Gaming%20avi%20examples/fenic.png' },
];

export const links = () => [
  { rel: 'stylesheet', href: avatarStyles },
];

const galleryImages = [
  { src: 'fenic.png', alt: 'Avatar Example 1' },
  { src: 'goob.png', alt: 'Avatar Example 2' },
  { src: 'regulus.png', alt: 'Avatar Example 3' },
  { src: 'jinxed dog.png', alt: 'Avatar Example 4' },
];

export default function Avatar() {
  return (
    <div className="avatar-container">
      <div className="container">
        <h1>Commission Artwork</h1>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={`/images/Gaming avi examples/${image.src}`}
              alt={image.alt}
              className="gallery-img"
            />
          ))}
        </div>
        <div className="contact">
          For commissions, contact:{' '}
          <a
            href="mailto:info@gamingandmusic.com"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            info@gamingandmusic.com
          </a>
        </div>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}