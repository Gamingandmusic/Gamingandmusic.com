import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import indexStyles from "~/styles/index.css?url";

export const meta = () => [
  /* … all your meta tags unchanged … */
];

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export default function Index() {
  return (
    <div className="index-container">
      {/* The main container that holds everything */}
      <div className="container">
        <h1>Gamingandmusic</h1>

        <img
          src="/images/Gaming-image.png"
          alt="Gamingandmusic Avatar"
          className="avatar"
        />

        {/* Navigation – Remix’s `<Link>` is fine here */}
        <nav className="nav">
          <Link to="/music">Music</Link>
          <Link to="/avatar">Avatar</Link>
          <Link to="/live">Live</Link>
        </nav>

        {/* Rainbow horizontal rule – same inline style as you had */}
        <hr
          style={{
            height: "6px",
            background:
              "linear-gradient(to right, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #9933ff)",
            backgroundSize: "600% 100%",
            border: "none",
            margin: "5vh 0",
            width: "100%",
            maxWidth: "100vw",
            animation: "rainbowSlide 8s linear infinite",
          }}
        />
      </div>

      {/* The footer stays outside the container so it’s always visible */}
      <Footer />
    </div>
  );
}