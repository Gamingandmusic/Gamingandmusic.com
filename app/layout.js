import './globals.css';

export const metadata = {
  title: 'Gamingandmusic - Independent Music Artist',
  description: 'Independent music artist creating gaming and electronic music. Listen on all major platforms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}