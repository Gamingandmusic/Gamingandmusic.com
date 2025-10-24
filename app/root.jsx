// Root component - Main application layout
import { useEffect } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from '@remix-run/react';
import rootStyles from './root.css?url';

export const meta = () => [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  { name: 'theme-color', content: '#ff0000' },
];

export const links = () => [
  { rel: 'stylesheet', href: rootStyles },
  { rel: 'icon', href: '/images/favicon.png', type: 'image/x-icon' },
];

export default function App() {
  useEffect(() => {
    // Import smooth transitions after component mounts
    import('./utils/smooth-transitions.js');
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L8TX5ZTQFQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L8TX5ZTQFQ');
            `,
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}