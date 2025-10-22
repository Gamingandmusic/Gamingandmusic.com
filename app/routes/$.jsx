import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import notFoundStyles from '~/styles/not-found.css?url';

export const meta = () => [
  { title: '404 - Page Not Found' },
  { name: 'description', content: 'The page you are looking for could not be found.' },
];

export const links = () => [
  { rel: 'stylesheet', href: notFoundStyles },
];

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}