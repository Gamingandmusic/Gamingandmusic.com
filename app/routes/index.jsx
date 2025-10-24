import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import indexStyles from "~/styles/index.css?url";

export const meta = () => [
  { title: "Gamingandmusic - Independent Music Artist" },
  { name: "description", content: "Independent music artist creating gaming and electronic music. Listen on all major platforms." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://gamingandmusic.com/" },
  { property: "og:title", content: "Gamingandmusic - Independent Music Artist" },
  { property: "og:description", content: "Independent music artist creating gaming and electronic music. Listen on all major platforms." },
  { property: "og:image", content: "/images/Gaming-image.png" },
  { property: "og:site_name", content: "Gamingandmusic" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Gamingandmusic - Independent Music Artist" },
  { name: "twitter:description", content: "Independent music artist creating gaming and electronic music. Listen on all major platforms." },
  { name: "twitter:image", content: "/images/Gaming-image.png" },
];

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export default function Index() {
  return (
    <div className="index-container">
      <div className="container">
        <h1>Welcome to my website</h1>
        <img className="avatar" src="/images/Gaming-image.png" alt="Gaming Icon" />
        <div className="nav">
          <Link to="/music"><b>My music</b></Link>
          <Link to="/avatar"><b>Commissions</b></Link>
        </div>
        <div className="rainbow-divider"></div>
      </div>
      <Footer />
    </div>
  );
}